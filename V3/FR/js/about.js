/* =====================================================================
LIGHTBOX (fancybos)
===================================================================== */
$(document).ready(function(){
	$('.fancybox').fancybox();

	$('.fancybox-media')
	.fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});
});

/* =====================================================================
ANIMATED SKILLS
===================================================================== */
$(document).ready(function($) {
	$('.skills-wrap').appear(function() {

		    options = {
				   img1: '../images/c1.png',
				   img2: '../images/c3.png',				   
				   speed: 10,			   
				   percent: 10,
				   limit: 92,
				   onProgress: function(p){/*console.log('progress',p);*/}				
			      };

		    myplugin = $('#skill1').cprogress(options);

	},{accX: 0, accY: -200});
});

$(document).ready(function($) {
	$('.skills-wrap').appear(function() {

		    options = {
				   img1: '../images/c1.png',
				   img2: '../images/c3.png',				   
				   speed: 10,			   
				   percent: 10,
				   limit: 89.1,
				   onProgress: function(p){/*console.log('progress',p);*/}				
			      };

		    myplugin = $('#skill2').cprogress(options);

	},{accX: 0, accY: -200});
});

$(document).ready(function($) {
	$('.skills-wrap').appear(function() {

		    options = {
				   img1: '../images/c1.png',
				   img2: '../images/c3.png',				   
				   speed: 10,			   
				   percent: 10,
				   limit: 100,
				   onProgress: function(p){/*console.log('progress',p);*/},
				   onComplete: function(p){ $('#skill3 .percent').html('2πR'); }			
			      };

		    myplugin = $('#skill3').cprogress(options);

	},{accX: 0, accY: -200});
});

$(document).ready(function($) {
	$('.skills-wrap').appear(function() {

		    options = {
				   img1: '../images/c1.png',
				   img2: '../images/c3.png',				   
				   speed: 10,			   
				   percent: 1,
				   limit: 8,
				   onProgress: function(p){/*console.log('progress',p);*/}				
			      };

		    myplugin = $('#skill4').cprogress(options);

	},{accX: 0, accY: -200});
});

$(document).ready(function($) {
	$('.skills-wrap').appear(function() {

		    options = {
				   img1: '../images/c1.png',
				   img2: '../images/c3.png',				   
				   speed: 10,			   
				   percent: 10,
				   limit: 100,
				   onProgress: function(p){/*console.log('progress',p);*/}				
			      };

		    myplugin = $('#skill5').cprogress(options);

	},{accX: 0, accY: -200});
});

/* =====================================================================
TESTIMONIAL SLIDER
===================================================================== */
$(document).ready(function() {
 
  var owl = $("#testimonial-slider");
 
  $("#testimonial-slider").owlCarousel({
    stopOnHover : true,
    navigation:false,
    pagination: false,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true
  });

  $("#testimonials .next").click(function(){
    owl.trigger('owl.next');
  })
  $("#testimonials .prev").click(function(){
    owl.trigger('owl.prev');
  })
});

/* =====================================================================
GOOGLE MAP
===================================================================== */
$(document).ready(function(){
  "use strict";
	$('#map_addresses').gMap({
		address: "1515 Rue Ste-Catherine O, Montréal, QC",
		zoom: 17,
		arrowStyle: 1,
		controls: {
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true,
		overviewMapControl: false
	},
		markers:[
		{
			address: "1515 Rue Ste-Catherine O, Montréal, QC",
			popup: false,
			icon: {
				image: "../images/marker.png",
				iconsize: [40, 61],
				iconanchor: [20,60]
				}
			}
		]
	});
});

/* =====================================================================
Analytics
===================================================================== */
$(document).ready(function() {
	//menu buttons	
	$('#nav_menu_FR').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_FR_clicked');
		mixpanel.track("nav_menu_FR_clicked");
	});
	$('#nav_menu_home').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_home_clicked');
		mixpanel.track("nav_menu_home_clicked");
	});
	$('#nav_menu_product').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_product_clicked');
		mixpanel.track("nav_menu_product_clicked");
	});
	$('#nav_menu_prod_howitworks').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_howitworks_clicked');
		mixpanel.track("nav_menu_prod_howitworks_clicked");
	});
	$('#nav_menu_prod_garment').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_garment_clicked');
		mixpanel.track("nav_menu_prod_garment_clicked");
	});
	$('#nav_menu_prod_mobile').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_mobile_clicked');
		mixpanel.track("nav_menu_prod_mobile_clicked");
	});
	$('#nav_menu_prod_web').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_web_clicked');
		mixpanel.track("nav_menu_prod_web_clicked");
	});
	$('#nav_menu_prod_benefits').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_benefits_clicked');
		mixpanel.track("nav_menu_prod_benefits_clicked");
	});
	$('#nav_menu_about').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_clicked');
		mixpanel.track("nav_menu_about_clicked");
	});
	$('#nav_menu_about_mission').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_mission_clicked');
		mixpanel.track("nav_menu_about_mission_clicked");
	});
	$('#nav_menu_about_team').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_team_clicked');
		mixpanel.track("nav_menu_about_team_clicked");
	});
	$('#nav_menu_about_join').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_join_clicked');
		mixpanel.track("nav_menu_about_join_clicked");
	});
	$('#nav_menu_about_contact').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_contact_clicked');
		mixpanel.track("nav_menu_about_contact_clicked");
	});
	$('#nav_menu_press').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_clicked');
		mixpanel.track("nav_menu_press_clicked");
	});
	$('#nav_menu_press_news').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_news_clicked');
		mixpanel.track("nav_menu_press_news_clicked");
	});
	$('#nav_menu_press_mediakit').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_mediakit_clicked');
		mixpanel.track("nav_menu_press_mediakit_clicked");
	});
	$('#nav_menu_faq').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_faq_clicked');
		mixpanel.track("nav_menu_faq_clicked");
	});
	$('#nav_menu_blog').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_blog_clicked');
		mixpanel.track("nav_menu_blog_clicked");
	});
	$('#nav_menu_signup').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_signup_clicked');
		mixpanel.track("nav_menu_signup_clicked");
	});	

	//Footer buttons
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
	$('#footer_social_instagram').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_gplus');
		mixpanel.track("footer_social_gplus");
	});
	$('#footer_social_pinterest').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_instagram');
		mixpanel.track("footer_social_instagram");
	});
	$('#footer_social_vimeo').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_vimeo');
		mixpanel.track("footer_social_vimeo");
	});
	$('#footer_menu_home').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_home_clicked');
		mixpanel.track("footer_menu_home_clicked");
	});
	$('#footer_menu_product').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_product_clicked');
		mixpanel.track("footer_menu_product_clicked");
	});
	$('#footer_menu_prod_howitworks').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_howitworks_clicked');
		mixpanel.track("footer_menu_prod_howitworks_clicked");
	});
	$('#footer_menu_prod_garment').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_garment_clicked');
		mixpanel.track("footer_menu_prod_garment_clicked");
	});
	$('#footer_menu_prod_mobile').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_mobile_clicked');
		mixpanel.track("footer_menu_prod_mobile_clicked");
	});
	$('#footer_menu_prod_web').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_web_clicked');
		mixpanel.track("footer_menu_prod_web_clicked");
	});
	$('#footer_menu_prod_benefits').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_benefits_clicked');
		mixpanel.track("footer_menu_prod_benefits_clicked");
	});
	$('#footer_menu_about').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_clicked');
		mixpanel.track("footer_menu_about_clicked");
	});
	$('#footer_menu_about_mission').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_mission_clicked');
		mixpanel.track("footer_menu_about_mission_clicked");
	});
	$('#footer_menu_about_team').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_team_clicked');
		mixpanel.track("footer_menu_about_team_clicked");
	});
	$('#footer_menu_about_join').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_join_clicked');
		mixpanel.track("footer_menu_about_join_clicked");
	});
	$('#footer_menu_about_contact').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_contact_clicked');
		mixpanel.track("footer_menu_about_contact_clicked");
	});
	$('#footer_menu_press').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_clicked');
		mixpanel.track("footer_menu_press_clicked");
	});
	$('#footer_menu_press_news').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_news_clicked');
		mixpanel.track("footer_menu_press_news_clicked");
	});
	$('#footer_menu_press_mediakit').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_mediakit_clicked');
		mixpanel.track("footer_menu_press_mediakit_clicked");
	});
	$('#footer_menu_faq').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_faq_clicked');
		mixpanel.track("footer_menu_faq_clicked");
	});
	$('#footer_menu_blog').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_blog_clicked');
		mixpanel.track("footer_menu_blog_clicked");
	});
	$('#footer_menu_signup').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_signup_clicked');
		mixpanel.track("footer_menu_signup_clicked");
	});	

	//inpage buttons
	$('#about_pg_video_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'about_pg_video_btn_clicked');
		mixpanel.track("about_pg_video_btn_clicked");
	});
	$('#about_pg_join_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'about_pg_join_btn_clicked');
		mixpanel.track("about_pg_join_btn_clicked");
	});
	$('#about_pg_sendmessage_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'about_pg_sendmessage_btn_clicked');
		mixpanel.track("about_pg_sendmessage_btn_clicked");
	});
});
