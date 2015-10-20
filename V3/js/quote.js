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

    // Send a common pageview to GA from the English or French website.
    ga('send', 'pageview', '/quotation-form-landed');

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

        // Send virtual pageview to GA.
        ga('send', 'pageview', '/quotation-form-sending');

        // Format request data and send request.
        $.ajax({
            type: 'POST',
            cache: false,
            url: $(this).attr('action'),
            data: {
                first_name: this.first_name.value,
                last_name: this.last_name.value,
                organization: this.organization.value,
                title: this.title.value,
                num_units: this.num_units.value,
                phone: this.phone.value,
                email: this.email.value,
                website: this.website.value,
                token: this.token.value
            },
            complete: function(response) {

                $('.ajax').hide();

                // Make sure request was successful.
                if (response.status != 201) {
                    $('.errormessage').show();
                    console.log('Error: ' + response.responseText);
                }

                else {
                    $('.successmessage').show();

                    // Send virtual pageview to GA.
                    ga('send', 'pageview', '/quotation-form-sent');
                }
            }
        });

        return false;
    });
});
