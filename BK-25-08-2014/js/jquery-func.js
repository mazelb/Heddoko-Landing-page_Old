
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
	            } else {
	                // It worked, carry on...
	                $('#thankyoudiv').show();
	            }
	        }
	    });
	});

	$('#mc-embedded-subscribe').click(function() {
		ga('send', 'event', 'button', 'click', 'Subscribe');
	});
	$('#aboutmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'About');
	});
	$('#benefitsmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Benefits');
	});
	$('#howmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'How');
	});
	$('#teammenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Team');
	});
	$('#contactmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Contact');
	});
	$('#registermenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Register');
	});
	$('#blogmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Blog');
	});
	$('#pressmenu').click(function() {
		ga('send', 'event', 'button', 'click', 'Press');
	});
	$('#cta_header_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'Reserve');
	});
	$('#cta_header_reserve_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'EventBriteReserve');
	});


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
	
