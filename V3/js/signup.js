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
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

/* =====================================================================
SLIDER FORM SUBMIT
===================================================================== */
$(document).ready(function(){
	$('#mc-embedded-subscribe-form').on('submit', function(e) {
		//disable form fields
		$('#mc-embedded-subscribe-form input').attr('disabled', 'disabled');

		//validate email
		if(validateEmail( $('#mce-EMAIL').val() )){
			$('#mc-embedded-subscribe-form .input-group').hide();
			$('#mc-embedded-subscribe-form .ajax').css('display', 'block').show();

			$.ajax({
		        type: $('#mc-embedded-subscribe-form').attr('method'),
		        url: $('#mc-embedded-subscribe-form').attr('action'),
		        // data: $('#mc-embedded-subscribe-form').serialize(),
		        data: { EMAIL: $('#mce-EMAIL').val() },
		        cache       : false,
		        dataType    : 'json',
		        contentType: "application/json; charset=utf-8",
		        error       : function(err) { alert('Could not connect to the registration server. Please try again later.'); },
		        success     : function(data) {
		            if (data.result != 'success') {
						// Something went wrong, do something to notify the user. maybe alert(data.msg);
						alert(data.msg);
						$('#mc-embedded-subscribe-form input').removeAttr('disabled');
						$('#mc-embedded-subscribe-form .input-group').show();
						$('#mc-embedded-subscribe-form .ajax').hide();

						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'sign_up_failed');
						// mixpanel.track('sign_up_failed');

		            } else {
		                // It worked, carry on...
		                $('#mc-embedded-subscribe-form .ajax').hide();
		                $('#thankyoudiv').html('<h3>Thank You!</h3>');
		                $('#thankyoudiv').show();

						// ga('send', 'event', 'mailchimp_server', 'mailchimp_server_response', 'user_signed_up');
						// mixpanel.track('user_signed_up');
		            }
		        }
		    });
		} else {
			//display message if non-valid email address
			alert('Please enter a valid email address');
			$('#mc-embedded-subscribe-form input').removeAttr('disabled');
			$('#mc-embedded-subscribe-form .input-group').show();
			$('#mc-embedded-subscribe-form .ajax').hide();
		}

		e.preventDefault();
	});

	//signed up button
	$('#mc-embedded-subscribe').click(function() {
		// ga('send', 'event', 'button', 'click', 'sign_up_button_clicked');
		// mixpanel.identify($('#mce-EMAIL').val());
		// mixpanel.people.set({
		//     "$email": $('#mce-EMAIL').val()
		// });
		// mixpanel.track('sign_up_button_clicked');
	});	
});
