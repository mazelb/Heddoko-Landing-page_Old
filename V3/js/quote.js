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
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: {
                first_name: this.first_name.value,
                last_name: this.last_name.value,
                organization: this.organization.value,
                title: this.title.value,
                phone: this.phone.value,
                email: this.email.value,
                website: this.website.value,
                token: this.token.value
            },
            cache: false,
            error: function(response) {
                console.log('Error: ' + response.responseText);

                $('.ajax').hide();
                $('.errormessage').show();
            },
            success: function (response) {
                console.log(response);

                $('.ajax').hide();
                $('.successmessage').show();
            }
        });

        return false;
    });
});
