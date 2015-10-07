/**
 * @file    quote.js
 * @brief   Handles sending quotes and scrolling the top navigation.
 * @author  Francis Amankrah (frank@heddoko.com)
 */

// Makes navigation bar opaque when scrolling.
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$('header').addClass('highlight');
	} else {
		$('header').removeClass('highlight');
	}
});

// Quotation form.
$(document).ready(function() {

    // Attach submit listener to form.
    $(document.quotation).on('submit', function(event) {
        event.preventDefault();

        // Disable form fields.
        $(this).find('.form-control').prop('disabled', true);

        // Validate phone #.
        var phone = this.phone.value.replace(/([^0-9])/g, '');
        if (phone.length < 6)
        {
            $(this).find('.form-control').prop('disabled', false);
            $(this.phone).parent().find('.error').slideDown();

            return false;
        }

        // Slide out form and show loading animation.
        $(this).slideUp(500);
        $('.ajax').show();

        // Format request data and send request.
        var formData = {
            first_name: this.first_name.value,
            last_name: this.last_name.value,
            title: this.title.value,
            phone: this.phone.value,
            email: this.email.value,
            website: this.website.value,
            token: this.token.value
        };

        console.log(formData);

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            cache: false,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            error: function(response) {
                console.log(response);
                alert('Could not process your request. Please try again later.');
            },
            success: function (response) {
                console.log(response);
            },
            successBackup : function(data) {
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

        return false;
    });
});
