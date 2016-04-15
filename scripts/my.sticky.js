//$(window).load(function() {
//    var $stickyNavbar = $('.navbar_wrapper')
//    var sticky
//
//    if ($stickyNavbar.length) {
//        sticky = new Waypoint.Sticky({
//            element: $stickyNavbar[0],
//            wrapper: '<div class="sticky-wrapper waypoint" />'
//        })
//
//    }
//    });

$(window).load(function() {
    $('nav').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('fixed-nav');
            $('section').css({ 'margin-top': 90 });
        } else if (direction == 'up') {
            $('nav').removeClass('fixed-nav');
            $('section').css({ 'margin-top': 30 });
        }
    });
});
