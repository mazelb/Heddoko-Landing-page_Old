<?php
/**
 * @file    quote.php
 * @brief   Handles incoming quotation requests.
 * @author  Francis Amankrah (frank@heddoko.com)
 * @notes   We use a PHP script instead of doing everything through AJAX to:
 *              1. Take advantage of Insightly's PHP SDK.
 *              2. Hide our API key from the client.
 */

// If a request is being sent, process it.
Quote::processRequest();

class Quote
{
    // Replace this with your TESTING api key.
    const DEV_API_KEY = '4172a7db-fbb9-45c5-bf6f-d1655b123420';

    // Replace this with the LIVE api key.
    const LIVE_API_KEY = '69c05e7f-c9ce-4c37-b75a-e77b3a8b8689';

    // Name of custom field to store the # of units requested.
    const NUM_UNITS_FIELD = 'Kits_Qty';

    // Name of lead source field.
    const LEAD_SOURCE_NAME = 'Web_RFQ';

    //
    // Details for "thank you" message.
    //

    const EMAIL_FROM = 'sales@heddoko.com';
    const EMAIL_SUBJECT_EN = 'Heddoko Development Kit';
    const EMAIL_SUBJECT_FR = 'Kit de développement Heddoko';

    //
    // Other class variables. These will be set by the class as needed.
    //

    static $apiKey;
    static $error;

    /**
     * Processes a quotation request.
     *
     * @return mixed
     */
    public static function processRequest()
    {
        // Make sure this is in fact a request, and we're not just including the file
        // from another PHP script.
        if (strtoupper($_SERVER['REQUEST_METHOD']) != 'POST') {
            return;
        }

        // Check the request token.
        if (!strlen($_POST['token']) || $_POST['token'] !== static::getToken()) {
            return static::send('Invalid request token.', 400);
        }

        //
        // Step 1:  Find the LEAD_SOURCE_ID to use with Insightly. We start with this to avoid
        //          having to make another request later to update the newly created lead.
        //

        $leadSourceID = null;

        // Retrieve the lead sources so we can find the right LEAD_SOURCE_ID.
        $leadSources = static::makeRequest('GET', '/v2.2/LeadSources');
        if (!empty($leadSources))
        {
            // Find the right LEAD_SOURCE_ID.
            foreach ($leadSources as $source)
            {
                if ($source->LEAD_SOURCE == static::LEAD_SOURCE_NAME) {
                    $leadSourceID = $source->LEAD_SOURCE_ID;
                    break;
                }
            }
        }

        //
        // Step 2:  Create lead on insightly.
        //

        // Retrieve the parameters to create a new lead on Insightly.
        $firstName = strip_tags(trim($_POST['first_name']));
        $lastName = strip_tags(trim($_POST['last_name']));
        $emailAddress = strip_tags(trim($_POST['email']));
        $data =
        [
            'FIRST_NAME' => $firstName,
            'LAST_NAME' => $lastName,
            'ORGANIZATION_NAME' => strip_tags(trim($_POST['organization'])),
            'TITLE' => strip_tags(trim($_POST['title'])),
            'PHONE_NUMBER' => strip_tags(trim($_POST['phone'])),
            'EMAIL_ADDRESS' => $emailAddress,
            'WEBSITE_URL' => strip_tags(trim($_POST['website'])),
            'LEAD_SOURCE_ID' => $leadSourceID
        ];

        // Create lead on Insightly API. If an error occurs, we'll send a 500 HTTP code. In any
        // other case we'll return a 201 HTTP code to indicate that the lead was created.
        if (!$lead = static::makeRequest('POST', '/v2.2/Leads', $data)) {
            return static::abort('Could not create lead');
        }

        //
        // Step 3:  Send thank you email. We will continue with the process regardless of if the
        //          email was sent or not.
        //

        $enMsg =
            'Dear %1$s,'
            . "\r\n"
            ."\r\n"
            .'Thanks for requesting a Heddoko development kit! '
            .'We’ll be in touch with you very soon.'
            ."\r\n"
            ."\r\n"
            .'- The Heddoko Team';

        $frMsg =
            '%1$s,'
            ."\r\n"
            ."\r\n"
            .'Merci pour votre demande pour un kit de développement Heddoko! '
            .'Nous serons en contact avec vous très bientôt.'
            ."\r\n"
            ."\r\n"
            ."- L'équipe Heddoko";

        $message = stripos($_SERVER['HTTP_REFERER'], '/FR/') === false ? $enMsg : $frMsg;

        $fullName = $firstName .' '. $lastName;
        mail(
            "$fullName <$emailAddress>",
            static::EMAIL_SUBJECT_EN,
            wordwrap(sprintf($message, $fullName), 70, "\r\n"),
            'From: '. static::EMAIL_FROM ."\r\n".
            'Reply-To: '. static::EMAIL_FROM ."\r\n".
            'X-Mailer: PHP/'. phpversion()
        );

        // Send the email message back to client for debugging.
        Heddoko::isLocal() ? wordwrap(sprintf($message, $fullName), 70, "\r\n") : null;

        //
        // Step 4:  Add the # of units requested as a custom field.
        //

        // Retrieve the custom fields so that we can find the right CUSTOM_FIELD_ID.
        if (!$customFields = static::makeRequest('GET', '/v2.2/CustomFields')) {
            return static::abort('Could not retrieve custom fields', 201);
        }

        // Make sure we have custom fields to work with.
        elseif (empty($customFields)) {
            return static::abort('No custom fields found.', 201);
        }

        // Find the right CUSTOM_FIELD_ID.
        $customFieldID = null;
        foreach ($customFields as $field)
        {
            if ($field->FIELD_NAME == static::NUM_UNITS_FIELD) {
                $customFieldID = $field->CUSTOM_FIELD_ID;
                break;
            }
        }
        if (!strlen($customFieldID)) {
            return static::abort('Could not find custom field name for # of units', 201);
        }

        // Add the # of units as a custom field.
        $endpoint = '/v2.2/Leads/'. $lead->LEAD_ID .'/CustomFields';
        $data =
        [
            'CUSTOM_FIELD_ID' => $customFieldID,
            'FIELD_VALUE' => (int) $_POST['num_units'],
            'STRING_VALUE' => (int) $_POST['num_units']
        ];

        if (!$response = static::makeRequest('PUT', $endpoint, $data)) {
            return static::abort('Could not update the # of units', 201);
        }

        // Finish the request.
        return static::send('Lead created.', 201);
    }

    /**
     * Makes a request to the Insightly API.
     *
     * @param string $verb
     * @param string $endpoint
     * @param array $data
     * @return stdClass|null
     */
    public static function makeRequest($verb, $endpoint, array $data = [])
    {
        // Dependencies
        require_once 'insightly.php';
        require_once 'HeddokoHelperClass.php';

        // Set the API key to be used.
        if (!static::$apiKey)
        {
            static::$apiKey = Heddoko::isLocal() ? static::DEV_API_KEY : static::LIVE_API_KEY;
            // static::$apiKey = static::DEV_API_KEY;
        }

        // Make the request.
        $response = null;
        try
        {
            $request = new InsightlyRequest($verb, static::$apiKey, $endpoint);

            if (!empty($data)) {
                $request->body($data);
            }

            $response = $request->asJSON();
        }

        catch (Exception $e) {
            static::$error = $e->getMessage();
        }

        return $response;
    }

    /**
     * Sends a response back to the client.
     *
     * @param string $msg   Message to send back to client.
     * @param int $status   HTTP status code.
     * @return void
     */
    public static function send($msg, $status = 200)
    {
        // Send the status code.
        header('HTTP/1.1 '. $status);

        // Finish request.
        if (static::isAjax()) {
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($msg);
        } else {
            $location = strpos($_SERVER['HTTP_REFERER'], '/FR/quote') ? '/FR/quote' : '/quote';
            header('Location: '. $location);
        }

        exit();
    }

    /**
     * Sends an error message to the client and aborts the script.
     *
     * @param string $msg
     * @return void
     */
    public static function abort($msg, $status = 500)
    {
        // Append error message.
        $msg = strlen(static::$error) ? $msg .': '. static::$error : $msg;

        return static::send($msg, $status);
    }

    /**
     * Checks whether the request was sent through AJAX or not.
     */
    public static function isAjax() {
        return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

    /**
     * Generates a session-specific token.
     */
    public static function getToken() {
        return md5(session_id());
    }
}
