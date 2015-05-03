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
