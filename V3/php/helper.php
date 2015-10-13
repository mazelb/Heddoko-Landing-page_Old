<?php
/**
 * @file    helper.php
 * @brief   General helper class
 * @author  Francis Amankrah (frank@heddoko.com)
 */
class Heddoko
{
    /**
     * Generates a pinterest code snippet for an image/media item.
     */
    public static function pin($media, $description = 'Heddoko')
    {
        return '<a'.
                'data-pin-color="red"'.
                'data-pin-config="hidden"'.
                'data-pin-do="buttonPin"'.
                'href="//www.pinterest.com/pin/create/button/'.
                    '?url=http://www.heddoko.com/'.
                    '&media='. $media .
                    '&description='. $description .'">'.

                    '<img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_white_20.png" />'.
                '</a>';
    }
}
