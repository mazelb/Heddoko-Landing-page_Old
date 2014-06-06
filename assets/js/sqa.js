$(window).load(function() {
    'use strict';

    /***********************************************************
     * FLEXSLIDER
     ***********************************************************/
    $('#flexslider-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#flexslider-slider'
    });

    $('#flexslider-slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#flexslider-carousel"
    });

    /***********************************************************
     * ISOTOPE
     ***********************************************************/
    var isotope_works = $('.portfolio-isotope');
    isotope_works.isotope({
        'itemSelector': '.portfolio-item-isotope'
    });

    $('.portfolio-isotope-filter a').click(function() {
        $(this).parent().parent().find('li').removeClass('selected');
        $(this).parent().addClass('selected');

        var selector = $(this).attr('data-filter');
        isotope_works.isotope({ filter: selector });
        return false;
    });
});

$(document).ready(function() {
    'use strict';

    /******************************************************************************
     * MAP
     ******************************************************************************/
    if ($('#map').length !== 0) {
        var styles = [
            {
                "stylers": [
                    { "invert_lightness": true },
                    { "saturation": -75 },
                    { "hue": "#005eff" }
                ]
            }

        ];
        var options = {
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'Styled'
        };
        var div = document.getElementById('map');
        var map = new google.maps.Map(div, options);

        new google.maps.Marker({
            position: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
            map: map
        });

        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
    }

    /******************************************************************************
     * CONTENT ROTATOR
     ******************************************************************************/
    $('.content-rotator').each(function() {
        var rotator = $(this);

        setInterval(function() {
            var current = $('.active', rotator);
            var next = current.next();

            if (next.length === 0) {
                next = $('.item:first', rotator);
            }

            $(current).delay(rotator.data('delay')).animate({
                opacity: 0
            }, rotator.data('delay') / 2 , function() {
                current.removeClass('active');
                next.addClass('active');

                $(next).animate({
                    opacity: 1
                }, rotator.data('delay') / 2);
            });

        }, rotator.data('delay') * 2);
    });

    /***********************************************************
     * ACCORDION
     ***********************************************************/
    $('.panel-heading a[data-toggle="collapse"]').on('click', function () {
        var context = $(this).data('parent');
        var clicked_panel = $(this).parent().parent();

        if(clicked_panel.hasClass('active')) {
            $(clicked_panel).removeClass('active');
        } else {
            $('.panel-heading', context).removeClass('active');
            $(clicked_panel).addClass('active');
        }
    });

    /******************************************************************************
     * APPEAR
     ******************************************************************************/
    $('.has-animation').appear(function() {
        if ($(this).attr('data-delay')) {
            $(this).delay($(this).attr('data-delay')).queue(function() {
                $(this).addClass('animate');
                $(this).dequeue();
            });
        } else {
            $(this).addClass('animate');
        }                
    });

    /******************************************************************************
     * BACKGROUND IMAGE
     ******************************************************************************/
    $('*[data-background-image]').each(function() {
        $(this).css({
            'background-image': 'url(' + $(this).data('background-image') + ')'
        });
    });

    /******************************************************************************
     * DRAWER
     ******************************************************************************/
    $('.drawer-toggle').click(function() {
        $('.drawer').toggleClass('open');
    });

    /******************************************************************************
     * SMOOTH SCROLLING
     ******************************************************************************/
    $('a.move').smoothScroll({
        speed: 1000
    });
    $('a.move-unstyled').smoothScroll({
        speed: 1000
    });


    // Twitter feed ----------------------------------------            

    if ($('#twitter-feed').length) {
        $('#twitter-feed').tweet({
            username: 'heddoko',
            join_text: 'auto',
            avatar_size: 0,
            count: 4
        });
            
    $('#twitter-feed').find('ul').addClass('twitter-slider');
    $('#twitter-feed').find('ul li').addClass('item');
    var owl = $(".twitter-slider");
        owl.owlCarousel({
            navigation:false,
            slideSpeed : 500,
            pagination :false,
            autoHeight : true,
            singleItem:true,
        }); 
        $(".twitts .next-slide").click(function(){
            owl.trigger('owl.next');        
        });
        $(".twitts .prev-slide").click(function(){
            owl.trigger('owl.prev');        
        });
    };

    /******************************************************************************
     * FORM SUBMISSION
     ******************************************************************************/
    /* email validation */
    function validateEmail(elementValue){      
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue); 
    }

    //RANDOM PASSWORD GENERATOR
    var keylist="abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()";
    var temp='';

    function generatepass(){
      // temp = '';
      // for (i=0;i<16;i++) {
      //   temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
      // }
      return 'temp';
    }

    $('form').submit(function(){
        // console.log('yo');
        $('form button').attr('disabled', true);

        //validation for empty
        $('form input').each(function(){
            if($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        //validate email
        if(!Boolean(validateEmail($('#email').val()))) {
            $('#email').addClass('error');
        }

        if($('form input').hasClass('error')) {
        } else {
            // $('form input').prop('disabled', true).addClass('disabled');
                Parse.initialize("MXv88lTiUcErHm2lotf6vukjcylUUOtwVnGCjCkn", "8VSNgo8M3NcUpFbJx9YvPIBoEk9BjmvpfHoGyX0h");

                var user = new Parse.User();
                user.set("username", $('#email').val());
                user.set("email", $('#email').val());
                user.set("password", generatepass());

                user.signUp(null, {
                  success: function(user) {
                    $('form input').hide();
                    $('form button').hide();
                    $('.background-primary h3').html('Confirmed');
                    $('.background-primary p').html('We\'ll be in touch soon.');
                    // $('form').hide();
                    // $('.hidden').removeClass('hidden');
                    // $('.newsletter').delay(500).slideUp();
                  },
                  error: function(user, error) {
                    alert("There was a problem communicating with our server. Please try again later.");
                    // console.log(error);
                    $('form input').prop('disabled', false).removeClass('disabled');
                  }
                });
        }
        return false;
    });
});