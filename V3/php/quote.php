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
require_once 'insightly.php';
require_once 'HeddokoHelperClass.php';
Quote::processRequest();

class Quote
{
    // Replace this with your TESTING api key.
    const DEV_API_KEY = '4172a7db-fbb9-45c5-bf6f-d1655b123420';

    // Replace this with the LIVE api key.
    const LIVE_API_KEY = '69c05e7f-c9ce-4c37-b75a-e77b3a8b8689';

    static $apiKey;
    static $error;

    /**
     * Processes a quotation request.
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

        // Retrieve parameters.
        $data = [
            'FIRST_NAME' => strip_tags(trim($_POST['first_name'])),
            'LAST_NAME' => strip_tags(trim($_POST['last_name'])),
            'ORGANIZATION_NAME' => strip_tags(trim($_POST['organization'])),
            'TITLE' => strip_tags(trim($_POST['title'])),
            'PHONE_NUMBER' => strip_tags(trim($_POST['phone'])),
            'EMAIL_ADDRESS' => strip_tags(trim($_POST['email'])),
            'WEBSITE_URL' => strip_tags(trim($_POST['website']))
        ];

        static::$apiKey = Heddoko::isLocal() ? static::DEV_API_KEY : static::LIVE_API_KEY;

        // Create lead on Insightly API.
        if (!$leadID = static::createLead($data)) {
            return static::send(static::$error, 500);
        }

        // Retrieve the custom fields so that we can find the right CUSTOM_FIELD_ID.
        if (!$customFields = static::getCustomFields()) {
            return static::send(static::$error, 201);
        }

        // Find the right CUSTOM_FIELD_ID.
        $fieldID = null;
        foreach ($customFields as $field)
        {
            if ($field->FIELD_NAME == 'Kits_Qty') {
                $fieldID = $field->CUSTOM_FIELD_ID;
                break;
            }
        }
        if (!strlen($fieldID)) {
            return static::send('Could not find custom field name "Kits_Qty"', 201);
        }

        // Add the # of units as a custom field.
        static::setNumUnits($leadID, $fieldID, $_POST['num_units']);

        return strlen(static::$error) ? static::send(static::$error, 201) : static::send('Lead created.', 201);
    }

    /**
     *
     */
    public static function createLead(array $data)
    {
        $leadID = null;

        try
        {
            $request = new InsightlyRequest('POST', static::$apiKey, '/v2.2/Leads');
            $result = $request->body($data)->asJSON();

            $leadID = $result->LEAD_ID;
        }

        catch (Exception $e) {
            static::$error = $e->getMessage();
        }

        return $leadID;
    }

    /**
     *
     */
    public static function getCustomFields()
    {
        $customFields = null;
        try
        {
            $request = new InsightlyRequest('GET', static::$apiKey, '/v2.2/CustomFields');
            $customFields = $request->asJSON();
        }

        catch (Exception $e) {
            static::$error = $e->getMessage();
        }

        // Make sure we don't have an empty array.
        if (!static::$error && empty($customFields)) {
            static::$error = 'No custom fields found.';
            $customFields = null;
        }

        return $customFields;
    }

    /**
     *
     */
    public static function setNumUnits($leadID, $fieldID, $units)
    {
        try
        {
            $request = new InsightlyRequest('PUT', static::$apiKey, '/v2.2/Leads/'. $leadID .'/CustomFields');
            $result = $request->body([
                'CUSTOM_FIELD_ID' => $fieldID,
                'FIELD_VALUE' => (int) $units,
                'STRING_VALUE' => (int) $units
            ])->asJSON();
        }

        catch (Exception $e) {
            static::$error = $e->getMessage();
        }
    }

    /**
     * Sends a response back to the client.
     *
     * @param string $msg   Message to send back to client.
     * @param int $status   HTTP status code.
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
