$(window).load(function() {
    // wrapperOneHighlight = new Waypoint({
    //     element: $('#wrapper-one'),
    //     handler: function(direction) {
    //       if (direction == 'down') {
    //         $("#linkOne").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //         $("#linkOne").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //       } else {
    //         $('li').children().css({"color": "black"});
    //         $('li').children().css({"background-color": "white"});
    //       };
    //     }, offset: '74px'});
    //
    // wrapperTwoHighlight = new Waypoint({
    //     element: $('#wrapper-two'),
    //     handler: function(direction) {
    //       if (direction == 'down') {
    //         $("#linkTwo").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //         $("#linkTwo").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //       } else {
    //         $('li').children().css({"color": "black"});
    //         $('li').children().css({"background-color": "white"});
    //       };
    //     }, offset: '74px'});
    //
    // wrapperThreeHighlight = new Waypoint({
    //     element: $('#wrapper-three'),
    //     handler: function(direction) {
    //       if (direction == 'down') {
    //         $("#linkThree").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //         $("#linkThree").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //       } else {
    //         $('li').children().css({"color": "black"});
    //         $('li').children().css({"background-color": "white"});
    //       };
    //     }, offset: '74px'});
    //
    // wrapperFourHighlight = new Waypoint({
    //     element: $('#wrapper-four'),
    //     handler: function(direction) {
    //       if (direction == 'down') {
    //         $("#linkFour").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //         $("#linkFour").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //       } else {
    //         $('li').children().css({"color": "black"});
    //         $('li').children().css({"background-color": "white"});
    //       };
    //     }, offset: '74px'});
    //
    // wrapperOneHighlightDeleteDown = new Waypoint({
    //   element: $('#topOne'),
    //   handler: function(direction) {
    //     if (direction == 'down') {
    //       $('li').children().css({"color": "black"});
    //       $('li').children().css({"background-color": "white"});
    //     } else {
    //       $("#linkOne").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //       $("#linkOne").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //     };
    //   }, offset: '74px'});
    //
    // wrapperTwoHighlightDeleteDown = new Waypoint({
    //   element: $('#topTwo'),
    //   handler: function(direction) {
    //     if (direction == 'down') {
    //       $('li').children().css({"color": "black"});
    //       $('li').children().css({"background-color": "white"});
    //     } else {
    //       $("#linkTwo").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //       $("#linkTwo").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //     };
    //   }, offset: '74px'});
    //
    // wrapperThreeHighlightDeleteDown = new Waypoint({
    //   element: $('#topThree'),
    //   handler: function(direction) {
    //     if (direction == 'down') {
    //       $('li').children().css({"color": "black"});
    //       $('li').children().css({"background-color": "white"});
    //     } else {
    //       $("#linkThree").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //       $("#linkThree").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //     };
    //   }, offset: '74px'});
    //
    // wrapperFourHighlightDeleteDown = new Waypoint({
    //   element: $('#topFour'),
    //   handler: function(direction) {
    //     if (direction == 'down') {
    //       $('li').children().css({"color": "black"});
    //       $('li').children().css({"background-color": "white"});
    //     } else {
    //       $("#linkFour").css({"color": "white", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 1s ease-in-out", "transition": "color 1s ease-in-out"});
    //       $("#linkFour").css({"background-color": "black", "-webkit-transition": "color 1s ease-in-out", "-moz-transition": "color 1s ease-in-out", "-o-transition": "color 2s ease-in-out", "transition": "color 1s ease-in-out"});
    //     };
    //   }, offset: '74px'});

      wrapperOneHighlight = new Waypoint({
          element: $('#wrapper-one'),
          handler: function(direction) {
            if (direction == 'down') {
              $("#linkOne").addClass('highlight');
              $("#linkOne").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
          }, offset: '74px'});

      wrapperTwoHighlight = new Waypoint({
          element: $('#wrapper-two'),
          handler: function(direction) {
            if (direction == 'down') {
              $("#linkTwo").addClass('highlight');
              $("#linkTwo").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
          }, offset: '74px'});

      wrapperThreeHighlight = new Waypoint({
          element: $('#wrapper-three'),
          handler: function(direction) {
            if (direction == 'down') {
              $("#linkThree").addClass('highlight');
              $("#linkThree").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
          }, offset: '74px'});

      wrapperFourHighlight = new Waypoint({
          element: $('#wrapper-four'),
          handler: function(direction) {
            if (direction == 'down') {
              $("#linkFour").addClass('highlight');
              $("#linkFour").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
          }, offset: '74px'});

      wrapperOneHighlightDeleteDown = new Waypoint({
        element: $('#topOne'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $("#linkOne").addClass('highlight');
            $("#linkOne").removeClass('unhighlighted');
          };
        }, offset: '74px'});

      wrapperTwoHighlightDeleteDown = new Waypoint({
        element: $('#topTwo'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $("#linkTwo").addClass('highlight');
            $("#linkTwo").removeClass('unhighlighted');
          };
        }, offset: '74px'});

      wrapperThreeHighlightDeleteDown = new Waypoint({
        element: $('#topThree'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $("#linkThree").addClass('highlight');
            $("#linkThree").removeClass('unhighlighted');
          };
        }, offset: '74px'});

      wrapperFourHighlightDeleteDown = new Waypoint({
        element: $('#topFour'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $("#linkFour").addClass('highlight');
            $("#linkFour").removeClass('unhighlighted');
          };
        }, offset: '74px'});
});

// Juke's example:

//$(function (){ // Nav Bar Waypoints & Highlighting var waypoint = new Waypoint({ element: $('#landing-page-image'), handler: function() { $('#link-about').css({"font-family":"", "color": ""});
//
//}, offset: '-25%' });
