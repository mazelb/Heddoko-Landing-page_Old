/* =====================================================================
ANIMATE ITEMS IN
===================================================================== */
$('[data-animated]').each(function() {
    $(this).addClass('animated-out');
});

$(window).scroll(function() {
    var scroll      = $(window).scrollTop();
    var height      = $(window).height();
    $('.animated-out[data-animated]').each(function() {
        var $this   = $(this);
        if(scroll + height >= $this.offset().top) {
            var delay   = parseInt($this.attr('data-animated'));
            if(isNaN(delay) || 0 === delay) {
                $this.removeClass('animated-out').addClass('animated-in');
            } else {
                setTimeout(function() {
                    $this.removeClass('animated-out').addClass('animated-in');
                }, delay);
            }
        }
    });
});