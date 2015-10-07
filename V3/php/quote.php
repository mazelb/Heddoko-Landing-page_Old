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
        if (strtolower($_SERVER['REQUEST_METHOD']) != 'post') {
            return;
        }

        // Check the request token.

        static::send($_REQUEST);
    }

    /**
     * Sends a response back to the client.
     *
     * @param mixed $data   Data to send back to client.
     * @param int $status   HTTP status code.
     */
    public static function send($data, $status = 200)
    {
        // Send the status code.
        header('HTTP/1.1 '. $status);

        // Finish request.
        if (static::isAjax()) {
            echo json_encode($data);
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
