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
    $('.navbar_wrapper').waypoint(function (direction) {
        if (direction == 'down') {
            $('.navbar_wrapper').addClass('fixed-nav');
            $('.content').css({ 'margin-top': 90 });
        } else if (direction == 'up') {
            $('.navbar_wrapper').removeClass('fixed-nav');
            $('.content').css({ 'margin-top': 30 });
        }
    });
});
