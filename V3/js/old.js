/* =====================================================================
LOADER
===================================================================== */
// Loading Script
$(window).load(function() {
  "use strict";
	$(".loader").delay(500).fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  "use strict";
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Slider Revolution
jQuery(document).ready(function() {
  "use strict";

	jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"twoxtwo",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
			delay:16000,
			startwidth:1170,
			startheight:760,
			hideThumbs:200,
						
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
						
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"round",
						
			touchenabled:"on",
			onHoverStop:"off",
						
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
										
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
												
			keyboardNavigation:"on",
				
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
								
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",

			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",
				
			autoHeight:"off",						
			forceFullWidth:"off",						
											
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			fullScreenOffsetContainer: ""	
	});
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$('header').addClass('highlight');
			} else {
		$('header').removeClass('highlight');
	}
});


// Scroll Plugin
// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$("header").css({'padding':'15px 0'});
// 			} else {
// 		$("header").css({'padding':'35px 0'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$("header").css({'height':'70px'});
// 			} else {
// 		$("header").css({'height':'auto'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$("header").css({'background':'#000'});
// 			} else {
// 		$("header").css({'background':'transparent'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$(".blog-main header").css({'background':'#000'});
// 			} else {
// 		$(".blog-main header").css({'background':'#000 url(images/slide/3.jpg) no-repeat center top fixed'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$(".navbar-nav").css({'margin-top':'5px'});
// 			} else {
// 		$(".navbar-nav").css({'margin-top':'15px'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$(".navbar-brand span").css({'display':'none'});
// 			} else {
// 		$(".navbar-brand span").css({'display':'block'});
// 	}
// });

// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 220) {
// 		$(".navbar-brand").css({'margin-top':'-5px'});
// 			} else {
// 		$(".navbar-brand").css({'margin-top':'-10px'});
// 	}
// });

/* Parallax */
jQuery(document).ready(function($) {
	$.stellar({
		horizontalOffset: 50
	});
});
//LOOKG INTO THIS!!!!!!!!!
/* Animation */
    $('[data-animated]').each(function() {
        $(this).addClass('animated-out');
    });

    $(window).scroll(function() {
        var scroll      = $(window).scrollTop();
        var height      = $(window).height();
        $('.animated-out[data-animated]').each(function() {
            var $this   = $(this);
            if(scroll + height >= $this.offset().top) {
                var delay   = parseInt($this.attr('data-animated'));
                if(isNaN(delay) || 0 === delay) {
                    $this.removeClass('animated-out').addClass('animated-in');
                } else {
                    setTimeout(function() {
                        $this.removeClass('animated-out').addClass('animated-in');
                    }, delay);
                }
            }
        });
});

/* Project Single Slider */
    $(document).ajaxComplete(function() {
    	$("#owl-project-single").owlCarousel({
    		navigation: false,
    		slideSpeed: 300,
    		paginationSpeed: 400,
    		singleItem: true
    		// "singleItem:true" is a shortcut for:
    		// items : 1, 
    		// itemsDesktop : false,
    		// itemsDesktopSmall : false,
    		// itemsTablet: false,
    		// itemsMobile : false
    	});
    });


// Onclick js
$(document).ready(function() {
  "use strict";

	$(".play-btn").on('click', function() {
	   $(this).hide();
	   $(".pause-btn").show();
	});
	$(".pause-btn").on('click', function() {
	   $(this).hide();
	   $(".play-btn").show();
	});
});

// Parallax
$('.clients-info').parallax("50%", 0.3);

// Services section

if (document.documentElement.clientWidth > 768) {

$(".s1-main").hover(function(){
    $('.hide-on-hover').fadeOut(200);
},function(){
    $('.hide-on-hover').fadeIn(200);
});

$(".s2-main").hover(function(){
    $('.hide-on-hover').fadeOut(200);
},function(){
    $('.hide-on-hover').fadeIn(200);
});

$(".s3-main").hover(function(){
    $('.hide-on-hover').fadeOut(200);
},function(){
    $('.hide-on-hover').fadeIn(200);
});

$(".s4-main").hover(function(){
    $('.hide-on-hover').fadeOut(200);
},function(){
    $('.hide-on-hover').fadeIn(200);
});

$(".s1-main").hover(function(){
    $('.s1').fadeIn(200);
},function(){
    $('.s1').fadeOut(200);
});

$(".s2-main").hover(function(){
    $('.s2').fadeIn(200);
},function(){
    $('.s2').fadeOut(200);
});

$(".s3-main").hover(function(){
    $('.s3').fadeIn(200);
},function(){
    $('.s3').fadeOut(200);
});

$(".s4-main").hover(function(){
    $('.s4').fadeIn(200);
},function(){
    $('.s4').fadeOut(200);
});

}