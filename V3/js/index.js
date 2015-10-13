/* =====================================================================
MOBILE CHECK
===================================================================== */
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

/* =====================================================================
NAV BACKGROUND SCROLLING
===================================================================== */
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$('header').addClass('highlight');
			} else {
		$('header').removeClass('highlight');
	}
});

/* =====================================================================
HTML VIDEO
===================================================================== */
function playVideo(element) {
	$(element)[0].play();
}

/* =====================================================================
SLIDER HTML5 VIDEO
===================================================================== */
$(document).ready(function() {
	//do not load video on smaller screens
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {
		$('.slider-home .container > div .play').hide();

		var videoFile = $('<video loop muted></video>')
		.on('canplaythrough', function(){
			var windowHeight = $(window).height();
			windowHeight = (windowHeight > 767) ? windowHeight : 768;

			var videoWidth = (windowHeight/($('.slider-home .videobg video')[0].videoHeight))*($('.slider-home .videobg video')[0].videoWidth);
			videoWidth = parseInt(videoWidth);

			var marginLeft = ((videoWidth-($(window).width()))/2)*-1;

			$('.slider-home .videobg video').css('marginLeft', marginLeft);

			$('.slider-home .videobg').fadeIn('slow', playVideo('.videobg video'));
		})
		.attr('src', '/videos/video.mp4')
		.load();

		$('.slider-home .videobg').append(videoFile);
		$('.slider-home .videobg').append('<div class="preventcontrols"></div>');
	}
});

/* =====================================================================
VALIDATE EMAIL
===================================================================== */
function validateEmailFunc(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

/* =====================================================================
FORM LIGHTBOX
===================================================================== */
$(document).ready(function(){
	$('#index_pg_signup_btn').click(function(){
		$('#modal').fadeIn();
		return false;
	});

	$('#modal .btn.close').click(function(){
		$('#modal').fadeOut();
		return false;
	});

	$('#modal #mc-embedded-subscribe-form').submit(function(e){
		e.preventDefault();
		$('#mc-embedded-subscribe-form input').addClass('disabled').attr('disabled', 'disabled');
		$('#mc-embedded-subscribe-form select').addClass('disabled').attr('disabled', 'disabled');
		$('#thankyoudiv').html('').hide();
		$('.ajax').hide();

		var validateFirstName = false;
		var validateLastName = false;
		var validateEmail = false;
		var validateProfession = false;

		//validate email
		if($('#mce-EMAIL').val() == '' || $('#mce-EMAIL').val() == null || $('#mce-EMAIL').val() == undefined || !validateEmailFunc( $('#mce-EMAIL').val() )) {
			validateEmail = true;
		}

		if($('#mce-FNAME').val() == '' || $('#mce-FNAME').val() == null || $('#mce-FNAME').val() == undefined) {
			validateFirstName = true;
		}

		if($('#mce-LNAME').val() == '' || $('#mce-LNAME').val() == null || $('#mce-LNAME').val() == undefined) {
			validateLastName = true;
		}

		if($('#mce-MMERGE3').val() == "" || $('#mce-MMERGE3').val() == null || $('#mce-MMERGE3').val() == undefined) {
			validateProfession = true;
		}

		if(!validateFirstName &&
			!validateLastName &&
			!validateEmail &&
			!validateProfession ) { //ALL GOOD

			$('.ajax').show();

			$.ajax({
		        type: $('#mc-embedded-subscribe-form').attr('method'),
		        url: $('#mc-embedded-subscribe-form').attr('action'),
		        data: { EMAIL: $('#mce-EMAIL').val(),
		        FNAME: $('#mce-FNAME').val(),
		        LNAME: $('#mce-LNAME').val(),
		        MMERGE3: $('#mce-MMERGE3').val() },
		        cache       : false,
		        dataType    : 'json',
		        contentType: "application/json; charset=utf-8",
		        error       : function(err) { alert('Could not connect to the registration server. Please try again later.'); },
		        success     : function(data) {
		            if (data.result != 'success') {
						// Something went wrong, do something to notify the user. maybe alert(data.msg);

						$('#mc-embedded-subscribe-form input').removeClass('disabled').removeAttr('disabled');
						$('#mc-embedded-subscribe-form select').removeClass('disabled').removeAttr('disabled');
						$('.ajax').hide();
						$('#thankyoudiv').html(data.msg).show();

						ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'sign_up_failed');
						mixpanel.track('sign_up_failed');

		            } else {
		                // It worked, carry on...
		                $('#mc-embedded-subscribe-form input').val('');
		                $('#mc-embedded-subscribe-form select').val('');
						$('#mc-embedded-subscribe-form input').removeClass('disabled').removeAttr('disabled');
						$('#mc-embedded-subscribe-form select').removeClass('disabled').removeAttr('disabled');
						$('.ajax').hide();
						$('#thankyoudiv').html('Thank You').show();

						ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'user_signed_up');
						mixpanel.track('user_signed_up');
		            }
		        }
		    });


		} else { //VALIDATE ERRORS
			$('#mc-embedded-subscribe-form input').removeClass('disabled').removeAttr('disabled');
			$('#mc-embedded-subscribe-form select').removeClass('disabled').removeAttr('disabled');
			$('.ajax').hide();

			if(validateLastName) {
				$('#thankyoudiv').html('Please enter a last name');
			}

			if(validateFirstName) {
				$('#thankyoudiv').html('Please enter a first name');
			}

			if(validateEmail) {
				$('#thankyoudiv').html('Please enter a valid email address');
			}

			if(validateProfession) {
				$('#thankyoudiv').html('Please select a valid profession');
			}

			$('#thankyoudiv').show();
		}

		return false;
	});

	//signed up button
	$('#mc-embedded-subscribe').click(function() {
		ga('send', 'event', 'button', 'click', 'sign_up_button_clicked');
		mixpanel.identify($('#mce-EMAIL').val());
		mixpanel.people.set({
		    "$email": $('#mce-EMAIL').val()
		});
		mixpanel.track('sign_up_button_clicked');
	});

	//signed up button
	$('#mc-embedded-subscribe-2').click(function() {
		ga('send', 'event', 'button', 'click', 'sign_up_button2_clicked');
		mixpanel.identify($('#mce-EMAIL').val());
		mixpanel.people.set({
		    "$email": $('#mce-EMAIL').val()
		});
		mixpanel.track('sign_up_button2_clicked');
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
	$('#index_pg_signup_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_signup_btn_clicked');
		mixpanel.track("index_pg_signup_btn_clicked");
	});
	$('#index_pg_garment_learnmore_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_garment_learnmore_btn_clicked');
		mixpanel.track("index_pg_garment_learnmore_btn_clicked");
	});
	$('#index_pg_mobile_learnmore_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_mobile_learnmore_btn_clicked');
		mixpanel.track("index_pg_mobile_learnmore_btn_clicked");
	});
	$('#index_pg_seeitlive_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_seeitlive_btn_clicked');
		mixpanel.track("index_pg_seeitlive_btn_clicked");
	});
	$('#index_pg_benefits_ahtletes_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_benefits_ahtletes_btn_clicked');
		mixpanel.track("index_pg_benefits_ahtletes_btn_clicked");
	});
	$('#index_pg_benefits_coaches_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_benefits_coaches_btn_clicked');
		mixpanel.track("index_pg_benefits_coaches_btn_clicked");
	});
	$('#index_pg_product_learnmore_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_product_learnmore_btn_clicked');
		mixpanel.track("index_pg_product_learnmore_btn_clicked");
	});
	$('#index_pg_partners_D3_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_partners_D3_btn_clicked');
		mixpanel.track("index_pg_partners_D3_btn_clicked");
	});
	$('#index_pg_partners_SS_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_partners_SS_btn_clicked');
		mixpanel.track("index_pg_partners_SS_btn_clicked");
	});
	$('#index_pg_partners_UBI_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_partners_UBI_btn_clicked');
		mixpanel.track("index_pg_partners_UBI_btn_clicked");
	});
	$('#index_pg_partners_MOBI_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_partners_MOBI_btn_clicked');
		mixpanel.track("index_pg_partners_MOBI_btn_clicked");
	});
	$('#index_pg_partners_NOD_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'index_pg_partners_NOD_btn_clicked');
		mixpanel.track("index_pg_partners_NOD_btn_clicked");
	});
});

/* =====================================================================
SLIDER FORM SUBMIT
===================================================================== */
// $(document).ready(function(){
// 	$('#mc-embedded-subscribe-form').on('submit', function(e) {
// 		//disable form fields
// 		$('#mc-embedded-subscribe-form input').attr('disabled', 'disabled');

// 		//validate email
// 		if(validateEmail( $('#mce-EMAIL').val() )){
// 			$('#mc-embedded-subscribe-form .input-group').hide();
// 			$('#mc-embedded-subscribe-form .ajax').css('display', 'block').show();

// 			$.ajax({
// 		        type: $('#mc-embedded-subscribe-form').attr('method'),
// 		        url: $('#mc-embedded-subscribe-form').attr('action'),
// 		        // data: $('#mc-embedded-subscribe-form').serialize(),
// 		        data: { EMAIL: $('#mce-EMAIL').val() },
// 		        cache       : false,
// 		        dataType    : 'json',
// 		        contentType: "application/json; charset=utf-8",
// 		        error       : function(err) { alert('Could not connect to the registration server. Please try again later.'); },
// 		        success     : function(data) {
// 		            if (data.result != 'success') {
// 						// Something went wrong, do something to notify the user. maybe alert(data.msg);
// 						alert(data.msg);
// 						$('#mc-embedded-subscribe-form input').removeAttr('disabled');
// 						$('#mc-embedded-subscribe-form .input-group').show();
// 						$('#mc-embedded-subscribe-form .ajax').hide();

// 						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'sign_up_failed');
// 						// mixpanel.track('sign_up_failed');

// 		            } else {
// 		                // It worked, carry on...
// 		                $('#mc-embedded-subscribe-form .ajax').hide();
// 		                $('#thankyoudiv').html('<h3>Thank You!</h3>');
// 		                $('#thankyoudiv').show();

// 						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'user_signed_up');
// 						// mixpanel.track('user_signed_up');
// 		            }
// 		        }
// 		    });
// 		} else {
// 			//display message if non-valid email address
// 			alert('Please enter a valid email address');
// 			$('#mc-embedded-subscribe-form input').removeAttr('disabled');
// 			$('#mc-embedded-subscribe-form .input-group').show();
// 			$('#mc-embedded-subscribe-form .ajax').hide();
// 		}

// 		e.preventDefault();
// 	});

// 	//signed up button
// 	$('#mc-embedded-subscribe').click(function() {
// 		// ga('send', 'event', 'button', 'click', 'sign_up_button_clicked');
// 		// mixpanel.identify($('#mce-EMAIL').val());
// 		// mixpanel.people.set({
// 		//     "$email": $('#mce-EMAIL').val()
// 		// });
// 		// mixpanel.track('sign_up_button_clicked');
// 	});
// });

/* =====================================================================
SLIDER HEIGHT RESIZE
===================================================================== */
$(document).ready(function() {
	"use strict";

	//reset header height
	function resetHeight() {
		var windowHeight = $(window).height();
		windowHeight = (windowHeight > 768) ? windowHeight : 768;
		$('.slider-home').css({height : windowHeight+'px'});
	}

	//on window resize reset slider height
	$(window).resize(function() {
		resetHeight();
	});

	/**
	* Init
	*/
	resetHeight();

});

/* =====================================================================
PRODUCT SPECS HTML5 VIDEO
===================================================================== */
$(document).ready(function() {
	//do not load video on smaller screens
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {

		var videoFile = $('<video loop muted></video>')
		.on('canplaythrough', function(){
			$('#productspecs .image-container .image-animation').delay(1000).fadeIn('fast');
		})
		.attr('src', '/videos/heddoko_app_punch.mp4')
		.load();

		$('#productspecs .image-container .image-animation').append(videoFile);
		$('#productspecs .image-container .image-animation').append('<div class="preventcontrols"></div>');

		$(window).scroll(function() {
		    var scroll      = $(window).scrollTop();
		    var height      = $(window).height();
		    $('#productspecs .image-container .image-animation').each(function() {
		        var $this   = $(this);
		        if(scroll + height >= $this.offset().top) {
		        	playVideo('#productspecs .image-container .image-animation video');
		        }
		    });
		});
	}
});

/* =====================================================================
PRODUCT SPECS PARALLAX
===================================================================== */
$(document).ready(function() {
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {
		$(window).scroll(function() {
		    var scroll      = $(window).scrollTop();
		    var height      = $(window).height();
		    var marginTop;
		    $('#productspecs').each(function() {
		        var $this   = $(this);
		        if(scroll + height >= $this.offset().top && scroll + height <= ($this.offset().top+$this.height()+55+$this.height()+55+55)) {
		        	marginTop = -200 * (1-($this.offset().top+200 + $(this).height()+55 - scroll)/$this.offset().top);
		        	$('#productspecs .image-container').css('marginTop', marginTop+'px');
		        }
		    });
		});
	}
});

/* =====================================================================
SEE IT LIVE HTML5 VIDEO
===================================================================== */
$(document).ready(function() {
	//do not load video on smaller screens
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {

		var videoFile = $('<video loop muted></video>')
		.on('canplaythrough', function(){
			$('#seeitlive .image-container .image-animation').delay(1000).fadeIn('fast');
		})
		.attr('src', '/videos/youtube.mp4')
		.load();

		$('#seeitlive .image-container .image-animation').append(videoFile);
		$('#seeitlive .image-container .image-animation').append('<div class="preventcontrols"></div>');

		$(window).scroll(function() {
		    var scroll      = $(window).scrollTop();
		    var height      = $(window).height();
		    $('#seeitlive .image-container .image-animation').each(function() {
		        var $this   = $(this);
		        if(scroll + height >= $this.offset().top) {
		        	playVideo('#seeitlive .image-container .image-animation video');
		        }
		    });
		});
	}
});

/* =====================================================================
LEARN MORE ON THE PRODUCT
===================================================================== */
$(document).ready(function() {
	//do not load video on smaller screens
	if($(document).width() > 768 && !window.mobileAndTabletcheck()) {

		var videos = [false, false];
		function bothVideosLoade() {
			if(videos[0] && videos[1]) {
				$('#learnproduct .videobg').fadeIn('slow', playVideo('#learnproduct .videobg video'));
				$('#learnproduct .image-animation').fadeIn('slow', playVideo('#learnproduct .image-animation video'));
			}
		}

		var videoFile = $('<video loop muted></video>')
		.on('canplaythrough', function(){
			var windowHeight = document.getElementById('learnproduct').offsetHeight;

			var videoWidth = (windowHeight/($('#learnproduct .videobg video')[0].videoHeight))*($('#learnproduct .videobg video')[0].videoWidth);
			videoWidth = parseInt(videoWidth);

			var marginLeft = ((videoWidth-($(window).width()))/2)*-1;

			// $('#learnproduct .videobg video').css('marginLeft', marginLeft);

			videos[0] = true;
			bothVideosLoade();
		})
		.attr('src', '/videos/heddoko_athlete_ropes.mp4')
		.load();

		$('#learnproduct .videobg').append(videoFile);
		$('#learnproduct .videobg').append('<div class="preventcontrols"></div>');

		var videoAppFile = $('<video loop muted></video>')
		.on('canplaythrough', function(){
			videos[1] = true;
			bothVideosLoade();
		})
		.attr('src', '/videos/heddoko_app_ropes.mp4')
		.load();

		$('#learnproduct .image-animation').append(videoAppFile);
		$('#learnproduct .image-animation').append('<div class="preventcontrols"></div>');

	}
});

/* =====================================================================
AWARDS SLIDER
===================================================================== */
$(document).ready(function() {

  var owl = $("#award-slider");

  $("#award-slider").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:false,
    pagination: false,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true
  });

  $("#awards .next").click(function(){
    owl.trigger('owl.next');
  })
  $("#awards .prev").click(function(){
    owl.trigger('owl.prev');
  })
});

/* =====================================================================
SLIDER FORM SUBMIT
===================================================================== */
$(document).ready(function(){
	$('#mc-embedded-subscribe-form-2').on('submit', function(e) {
		//disable form fields
		$('#mc-embedded-subscribe-form-2 input').attr('disabled', 'disabled');

		//validate email
		if(validateEmail( $('#mce-EMAIL-2').val() )){
			$('#mc-embedded-subscribe-form-2 .input-group').hide();
			$('#mc-embedded-subscribe-form-2 .ajax').css('display', 'block').show();

			$.ajax({
		        type: $('#mc-embedded-subscribe-form-2').attr('method'),
		        url: $('#mc-embedded-subscribe-form-2').attr('action'),
		        data: { EMAIL: $('#mce-EMAIL-2').val() },
		        cache       : false,
		        dataType    : 'json',
		        contentType: "application/json; charset=utf-8",
		        error       : function(err) { alert('Could not connect to the registration server. Please try again later.'); },
		        success     : function(data) {
		            if (data.result != 'success') {
						// Something went wrong, do something to notify the user. maybe alert(data.msg);
						alert(data.msg);
						$('#mc-embedded-subscribe-form-2 input').removeAttr('disabled');
						$('#mc-embedded-subscribe-form-2 .input-group').show();
						$('#mc-embedded-subscribe-form-2 .ajax').hide();

						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'sign_up_failed');
						// mixpanel.track('sign_up_failed');

		            } else {
		                // It worked, carry on...
		                $('#mc-embedded-subscribe-form-2 .ajax').hide();
		                $('#thankyoudiv-2').html('<h3>Thank You!</h3>');
		                $('#thankyoudiv-2').show();

						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'user_signed_up');
						// mixpanel.track('user_signed_up');
		            }
		        }
		    });
		} else {
			//display message if non-valid email address
			alert('Please enter a valid email address');
			$('#mc-embedded-subscribe-form-2 input').removeAttr('disabled');
			$('#mc-embedded-subscribe-form-2 .input-group').show();
			$('#mc-embedded-subscribe-form-2 .ajax').hide();
		}

		e.preventDefault();
	});

	//signed up button
	$('#mc-embedded-subscribe-2').click(function() {
		// ga('send', 'event', 'button', 'click', 'sign_up_button_clicked');
		// mixpanel.identify($('#mce-EMAIL-2').val());
		// mixpanel.people.set({
		//     "$email": $('#mce-EMAIL-2').val()
		// });
		// mixpanel.track('sign_up_button_clicked');
	});
});

/* =====================================================================
FANCYBOX LIGHTBOX
===================================================================== */
$(document).ready(function() {
	$('.fancybox-media').click(function(e){ e.preventDefault(); })
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
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
FORM SUBMIT
===================================================================== */
$(document).ready(function(){
	// $('.form-signup').submit(function(){
	// 	$(this).hide();
	// 	$('.ajax').fadeIn().css('display','block');
	// 	return false;
	// });
});

/* =====================================================================
OWL SLIDER
===================================================================== */
$(document).ready(function() {
  "use strict";
	// $('#owl-fworks').owlCarousel({
	// 	navigation : true, // Show next and prev buttons
	// 	slideSpeed : 300,
	// 	pagination : false,
	// 	singleItem: true,
	// 	autoHeight : true,
	// 	afterAction: updateActive
 //     });

	// $('#owl-fworks').trigger('owl.jumpTo', 1);
	// $('#fworks h3').eq(1).addClass('active');

	// $('#fworks h3 a').click(function() {
	// 	var index =  $('h3').index($(this).parent());
	// 	$('#fworks h3').removeClass('active');
	// 	$(this).parent().addClass('active');
	// 	$('#owl-fworks').trigger('owl.goTo', index);
	// 	return false;
	// });

	// function updateActive() {
	// 	$('#fworks h3').removeClass('active');
	// 	$('#fworks h3').eq(this.owl.currentItem).addClass('active');
	// }
});

/* =====================================================================
BLOG POSTS
===================================================================== */
$(document).ready(function($) {
 //  "use strict";

	// $.ajax({
	// 	method: 'GET',
	// 	url: '/php/blog.php',
	// 	dataType: 'json'
	// }).done(function(data) {
	// 	$('.blog .cq-info').remove();

	// 	var template;
	// 	var characterLimit = 126;
	// 	for(var i = 0; i < data.data.length; i++) {
	// 		template = '<div class="col-md-4 cq-info">'
	// 			+'<p>'+data.data[i].text.substring(0,characterLimit)+'...</p>'
	// 			+'<h4><a href="'+data.data[i].link+'">'+data.data[i].title+'</a></h4>'
	// 			+'<span>Written by '+data.data[i].author+'</span>'
	// 			+'</div>';

	// 		$('.blog .container').append(template);
	// 	}

	// });
});
