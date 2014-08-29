
$(document).ready(function(){
	$('#thankyoudiv').hide();
})

$(window).load(function() {

	$("#mc-embedded-subscribe-form").on("submit", function(e) {
		e.preventDefault();

		$('#thankyoudiv').hide();

		console.log("Handling the submit");

		$.ajax({
	        type: $("#mc-embedded-subscribe-form").attr('method'),
	        url: $("#mc-embedded-subscribe-form").attr('action'),
	        data: $("#mc-embedded-subscribe-form").serialize(),
	        cache       : false,
	        dataType    : 'json',
	        contentType: "application/json; charset=utf-8",
	        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
	        success     : function(data) {
	            if (data.result != "success") {
	                // Something went wrong, do something to notify the user. maybe alert(data.msg);
	                console.log("fail!!!");
					ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'sign_up_failed');
					mixpanel.track("sign_up_failed");

	            } else {
	                // It worked, carry on...
	                $('#thankyoudiv').show();
					ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'user_signed_up');
					mixpanel.track("user_signed_up");
	            }
	        }
	    });
	});

	//signed up button
	$('#mc-embedded-subscribe').click(function() {
		ga('send', 'event', 'button', 'click', 'sign_up_button_clicked');
		mixpanel.track("sign_up_button_clicked");
	});

	//menu buttons
	$('#about_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'about_menu_clicked');
		mixpanel.track("about_menu_clicked");
	});
	$('#benefits_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'benefits_menu_clicked');
		mixpanel.track("about_menu_clicked");
	});
	$('#how_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'how_menu_clicked');
		mixpanel.track("about_menu_clicked");
	});
	$('#team_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'team_menu_clicked');
		mixpanel.track("about_menu_clicked");
	});
	$('#contact_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'contact_menu_clicked');
		mixpanel.track("contact_menu_clicked");
	});
	$('#register_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'register_menu_clicked');
		mixpanel.track("register_menu_clicked");
	});
	$('#blog_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'blog_menu_clicked');
		mixpanel.track("blog_menu_clicked");
	});
	$('#press_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'press_menu_clicked');
		mixpanel.track("press_menu_clicked");
	});
	$('#signup_menu').click(function() {
		ga('send', 'event', 'button', 'click', 'signup_menu_clicked');
		mixpanel.track("signup_menu_clicked");
	});

	//social media buttons 
	$('#about_social_twitter').click(function() {
		ga('send', 'social', 'twitter', 'follow', 'about_social_twitter');
		mixpanel.track("about_social_twitter");
	});
	$('#about_social_facebook').click(function() {
		ga('send', 'social', 'facebook', 'like', 'about_social_facebook');
		mixpanel.track("about_social_facebook");
	});
	$('#about_social_linkedin').click(function() {
		ga('send', 'social', 'button', 'follow', 'about_social_linkedin');
		mixpanel.track("about_social_linkedin");
	});
	$('#about_social_gplus').click(function() {
		ga('send', 'social', 'button', 'like', 'about_social_gplus');
		mixpanel.track("about_social_gplus");
	});

	$('#footer_social_twitter').click(function() {
		ga('send', 'social', 'twitter', 'follow', 'footer_social_twitter');
		mixpanel.track("footer_social_twitter");
	});
	$('#footer_social_facebook').click(function() {
		ga('send', 'social', 'facebook', 'like', 'footer_social_facebook');
		mixpanel.track("footer_social_facebook");
	});
	$('#footer_social_linkedin').click(function() {
		ga('send', 'social', 'button', 'follow', 'footer_social_linkedin');
		mixpanel.track("footer_social_linkedin");
	});
	$('#footer_social_gplus').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_gplus');
		mixpanel.track("footer_social_gplus");
	});

	// $('#cta_header_btn').click(function() {
	// 	ga('send', 'event', 'button', 'click', 'Reserve');
	// });
	// $('#cta_header_reserve_btn').click(function() {
	// 	ga('send', 'event', 'button', 'click', 'EventBriteReserve');
	// });


    /******************************************************************************
     * APPEAR
     ******************************************************************************/
    $('.has-animation').appear(function() {
    	console.log("appearing !!!!!!!!!!!!!");
        if ($(this).attr('data-delay')) {
        	console.log("appearing delay!!!!!!!!!!!!!");
            $(this).delay($(this).attr('data-delay')).queue(function() {
                $(this).addClass('animated ' + $(this).attr('data-animation'));
                $(this).dequeue();
            });
        } else {
        	console.log("appearing no delay!!!!!!!!!!!!!");
            $(this).addClass('animated ' + $(this).attr('data-animation'));
        }                
    });

    //=================================== Totop  ===================================//
		$().UItoTop({ 		
			scrollSpeed:500,
			easingType:'linear'
		});

	//=================================== Nav Responsive =====================================//
	    $('#menu').tinyNav({
	       active: 'selected'
	    });
	    
	  //=================================== Nav Superfish ======================================//
	  jQuery(document).ready(function() {
	    jQuery('ul.sf-menu').superfish();
	  });	

     //=================================== Accordion  =================================// 
    $('.accordion-container').hide(); 
    $('.accordion-trigger:first').addClass('active').next().show();
    $('.accordion-trigger').click(function(){
      if( $(this).next().is(':hidden') ) { 
        $('.accordion-trigger').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown();
      }
      return false;
    });

	 //=================================== Works Carousel  ===================================// 
	  $(".ch-grid").owlCarousel({
	      autoPlay: 3000, 
	      items : 3,
	      navigation: false,
	      navigationText: true, 
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [1000,2],
	      itemsMobile : [560,1],
	      stopOnHover : true
	  });

	  //=================================== Gallery Carousel  ===================================// 
	  $(".carousel_singlepost").owlCarousel({
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true,
	      autoPlay: 2000
	  });
  
	  //=================================== Testimonials Carousel  ===================================// 
	  $(".testimonials").owlCarousel({
	      autoPlay: 3500, 
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true
	  });

	  //=================================== Differentiators Carousel  ===================================// 
	  $(".differentiators").owlCarousel({
	      autoPlay: 2500, 
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true
	  });

	  //=================================== Flikr Feed  ========================================//
     $('#flickr').jflickrfeed({
		 limit: 8, //Number of images to be displayed
		 qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		 },
		 itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	 $('#flickr-aside').jflickrfeed({
		limit: 10, //Number of images to be displayed
		qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		},
		itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	//=================================== Lightbox  ===================================//	
	$('.fancybox').fancybox({
		'overlayOpacity'	:  0.7,
		'overlayColor'		: '#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
    	'easingIn'			: 'easeOutBack',
    	'easingOut'      	: 'easeInBack',
		'speedIn'         	: '700',
		'centerOnScroll'	: true,
		'titlePosition'     : 'over'
	});
    
	//=================================== Hover Effects =====================================//
	$('.social_icon a').hover(function() {
		$(this).toggleClass('animated tada');
	});
	$('.specialize a i').hover(function() {
		$(this).toggleClass('animated wobble');
	});
	$('.contact_us .btn-default').hover(function() {
		$(this).toggleClass('animated pulse');
	});

	//=================================== Tooltips =====================================//

	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}  

	//=================================== Scrollbar  ======================================//

	$(".info_hover").mCustomScrollbar({
        scrollButtons:{
			enable:true
		},
		theme:"dark-2"
    });

    //=============================  Nice scroll bar Body =================================//
      $("html").niceScroll({
        background:"transparent",
        cursorcolor:"#555",
        cursorwidth:8, 
        boxzoom:true, 
        autohidemode:false,
        zindex:99999,
        cursorborder:"0",
      });

	//=================================== Subtmit Form  ====================================//
	  $('.form-contact').submit(function(event) {  
	    event.preventDefault();  
	    var url = $(this).attr('action');  
	    var datos = $(this).serialize();  
	    $.get(url, datos, function(resultado) {  
	      $('.result').html(resultado);  
	    });  
	  });  

  
});
	
