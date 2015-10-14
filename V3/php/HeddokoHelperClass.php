<?php
/**
 * @file    helper.php
 * @brief   General helper class
 * @author  Francis Amankrah (frank@heddoko.com)
 */
class Heddoko
{
    /**
     * Generates a Pinterest code snippet for an image/media item.
     *
     * @param array $options
     * @return string
     */
    public static function pin(array $options)
    {
        // Retrieve Pinterest options.
        $url = isset($options['url']) ? $options['url'] : 'http://www.heddoko.com/';
        $media = isset($options['media']) ? $options['media'] : '';
        $description = isset($options['description']) ? $options['description'] : '';

        // Retrieve style options
        $pos = isset($options['position']) ? $options['position'] : 'top:40px;left:40px;';

        return  '<div style="position:absolute;z-index:100;'. $pos .'">'.
                    '<a data-pin-color="red"'.
                        'data-pin-config="hidden"'.
                        'data-pin-do="buttonPin"'.
                        'href="//www.pinterest.com/pin/create/button/'.
                            '?url='. $url .
                            '&media='. $media .
                            '&description='. $description .'">'.

                        '<img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_white_20.png" />'.
                    '</a>'.
                '</div>';
    }
}
