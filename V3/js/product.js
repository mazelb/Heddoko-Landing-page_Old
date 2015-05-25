/* =====================================================================
MOBILE CHECK
===================================================================== */
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

/* =====================================================================
HTML VIDEO
===================================================================== */
function playVideo(element) {
	$(element)[0].play();
}

/* =====================================================================
MOBILE APP ANIMATION
===================================================================== */
$(document).ready(function() {
	//do not load video on smaller screens	
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {
		var videoFiles = ['/videos/heddoko_app_pair.mp4'];

		var videoContainerWidth = $('#mobileapp .image-animation').width();
		$('#mobileapp .image-animation .image-videos').css('width', videoContainerWidth*videoFiles.length+'px');
		
		//for one video
		var mobilePairVideo = $('<video loop muted></video>')
		.attr('src', videoFiles[0])
		.on('canplaythrough', function(){
			$('#mobileapp .image-animation .image-videos').fadeIn();
			playVideo('#mobileapp .image-animation .image-videos video');
		})
		.load();

		$('#mobileapp .image-animation .image-videos').append(mobilePairVideo);

		//for multiple videos
		// loadVideos(videoFiles);
	}

	function playVideos() {
		if(!$('#mobileapp .image-animation .image-videos video').hasClass('active')){
			$('#mobileapp .image-animation .image-videos').fadeIn('fast', function(){
				playNextVideo();
			});
		}
	}

	function playNextVideo() {		
		var videoContainerWidth = $('#mobileapp .image-animation').width();
		var totalVideos = $('#mobileapp .image-animation .image-videos video').length;
		var currentVideoPlaying = $('#mobileapp .image-animation .image-videos video').index('#mobileapp .image-animation .image-videos .active');
		currentVideoPlaying++;

		$('#mobileapp .image-animation .image-videos video').removeClass('active');
		$('#mobileapp .image-animation .image-videos video').eq(currentVideoPlaying).addClass('active');
		$('#mobileapp .image-animation .image-videos').animate({marginLeft: (-1*videoContainerWidth*currentVideoPlaying)+'px'}, 250, function(){
			playVideo('#mobileapp .image-animation .image-videos .active');
		});
	}

	function loadVideos(videoList) {
		if(videoList.length > 0) {
			var videoFile = $('<video muted></video>')
			.on('canplaythrough', function(){
				videoList.shift();
				if(videoList.length > 0) { 
					loadVideos(videoList);
				} else {
					playVideos();
				}
			}).on('ended', function(){
				playNextVideo();
			})
			.attr('src', videoList[0])
			.load();

			$('#mobileapp .image-animation .image-videos').append(videoFile);
		}
	}
});

/* =====================================================================
HOW IT WORKS CLICK
===================================================================== */
$(document).ready(function() {
	// if($(document).width() > 768 && !window.mobileAndTabletcheck()) {
	// 	var appPairVideo = $('<video muted></video>')
	// 	.attr('src', '/videos/product_mobileapp.mp4')
	// 	.load();

	// 	$('#howitworks .preview .item.apppair .image-animation').append(appPairVideo);

	// 	var appCaptureVideo = $('<video muted></video>')
	// 	.attr('src', '/videos/product_mobileapp2.mp4')
	// 	.load();

	// 	$('#howitworks .preview .item.appcapture .image-animation').append(appCaptureVideo);
	// }

	$('#howitworks .select').click(function(){
		$('#howitworks .select').removeClass('active');
		$(this).addClass('active');
		var index = $('#howitworks .select').index(this);

		$('#howitworks .preview .item').hide();
		$('#howitworks .preview .item').eq(index).css('display', 'block');
		if($(document).width() > 768) {
			// $('#howitworks .preview .item').eq(index).children('.image-animation').children('video')[0].play();
		} else {
			var target =$('#howitworks .preview .item').eq(index);

			$('html, body').animate({
		        scrollTop: target.offset().top
		    }, 500);
			return false;
		}
	})
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
	$('#product_pg_benefits_athlete_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'product_pg_benefits_athlete_btn_clicked');
		mixpanel.track("product_pg_benefits_athlete_btn_clicked");
	});
	$('#product_pg_benefits_coaches_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'product_pg_benefits_coaches_btn_clicked');
		mixpanel.track("product_pg_benefits_coaches_btn_clicked");
	});
	$('#product_pg_brochure_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'product_pg_brochure_btn_clicked');
		mixpanel.track("product_pg_brochure_btn_clicked");
	});
});

/* =====================================================================
MOBILE VIDEO
===================================================================== */
// $(document).ready(function(){
// 	//do not load video on smaller screens	
// 	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {
// 		var videoFile = $('<video loop muted></video>')
// 		.on('canplaythrough', function(){
// 			$('#mobile .image-container .image-animation').fadeIn('slow', playVideo('#mobile .image-container .image-animation video'));
// 		})
// 		.attr('src', '/videos/product_mobileapp2.mp4')
// 		.load();

// 		$('#mobile .image-container .image-animation').append(videoFile);
// 	}
// })