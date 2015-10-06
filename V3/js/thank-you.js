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

