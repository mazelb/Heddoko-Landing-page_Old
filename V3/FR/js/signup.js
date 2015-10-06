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
SLIDER
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
	$('#mc-embedded-subscribe-form').submit(function(e){
		e.preventDefault();
		$('#mc-embedded-subscribe-form input').addClass('disabled').attr('disabled', 'disabled');
		$('#mc-embedded-subscribe-form select').addClass('disabled').attr('disabled', 'disabled');
		$('#thankyoudiv').html('').hide();
		$('.ajax').hide();

		var validateFirstName = false;
		var validateLastName = false;
		var validateEmail = false;

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

		if(!validateFirstName &&
			!validateLastName &&
			!validateEmail) { //ALL GOOD

			console.log($('#mce-EMAIL').val());
			console.log($('#mce-FNAME').val());
			console.log($('#mce-LNAME').val());
			console.log($('#mce-MMERGE3').val());
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
						$('#thankyoudiv').html('Merci').show();

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
				$('#thankyoudiv').html('Veuillez saisir votre nom');
			}

			if(validateFirstName) {
				$('#thankyoudiv').html('Veuillez saisir votre prénom');
			}

			if(validateEmail) {
				$('#thankyoudiv').html('Veuillez saisir votre courriel');
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
});
