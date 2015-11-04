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


     public static function pinVid(array $options)
    {
        // Retrieve Pinterest options.
        $youtubelink = isset($options['youtubelink']) ? $options['youtubelink'] : '' ;
        //$('object param[name="movie"]').val(); // grabs the video link from an embedded video
        // OLD EMBED STYLE CODE var youtubecode = youtubelink.match(/\/v\/(.*)\?/)[1];                                                                                                             
        $description = isset($options['description']) ? $options['description'] : '';

        preg_match('@(?:^https://www\.youtube\.com/watch\?v=)([^/]+)@i',$youtubelink, $matches);
        $youtubecode = $matches[1];
        //youtubelink.match(/\/embed\/(.*)/)[1];
        $pinimage = "http://img.youtube.com/vi/" . $youtubecode . "/0.jpg";

        $pos = isset($options['position']) ? $options['position'] : 'top:40px;left:40px;';


        return  '<div style="position:absolute;z-index:100;'. $pos .'">'.
                    '<a data-pin-color="red"'.
                        'data-pin-config="hidden"'.
                        'data-pin-do="buttonPin"'.
                        'href="//www.pinterest.com/pin/create/button/'.
                            '?url='. "http://www.heddoko.com" .
                            '&media='. $pinimage .
                            '&description='. $description .'">'.

                        '<img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_white_20.png" />'.
                    '</a>'.
                '</div>';
    }


    public static function isLocal()
    {
        return stripos($_SERVER['HTTP_HOST'], 'heddoko.com') === false;
    }

}

