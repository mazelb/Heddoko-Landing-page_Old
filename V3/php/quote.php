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
            'WEBSITE_URL' => strip_tags(trim($_POST['website'])),
        ];

        // Create lead on Insightly API.
        require 'insightly.php';
        $liveApiKey = '69c05e7f-c9ce-4c37-b75a-e77b3a8b8689';
        $devApiKey = '4172a7db-fbb9-45c5-bf6f-d1655b123420';    // Replace this with your testing API key.
        $endpoint = '/v2.1/Leads';
        try
        {
            $request = new InsightlyRequest('POST', $liveApiKey, $endpoint);
            $result = $request->body($data)->asJSON();

            return static::send('Lead successully created.', 201);
        }

        catch (Exception $error) {
            return static::send($error->getMessage(), 500);
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
