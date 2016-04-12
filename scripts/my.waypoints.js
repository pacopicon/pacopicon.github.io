// Masthead letter-stretch function

$.fn.letterStretch = function(){
    var element       = $(this),
        contentWidth  = element.width(),
        text          = element.text(),
        line          = $('<span class="stretchIt">' + text + '</span>'),
        numberChar    = element.text().length,
        spacing       = contentWidth / numberChar,
        textWidth;

    element.html(line);
    textWidth = line.width();

    if (textWidth < contentWidth){
        var  charWidth     = textWidth/numberChar,
             letterSpacing = spacing - charWidth + (spacing - charWidth) / numberChar; 

        line.css({'letter-spacing': letterSpacing});
    } else {
        line.contents().unwrap();
        element.addClass('justify');
    }
};

//$(window).load(function() {
$(document).ready(function() {
    
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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});

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
        }, offset: '100px'});
    
    // Masthead letter stretch function
    $('.masthead').letterStretch();
    $(window).resize(function () {
        $('.masthead').letterStretch();
    });
});

// Juke's example:

//$(function (){ // Nav Bar Waypoints & Highlighting var waypoint = new Waypoint({ element: $('#landing-page-image'), handler: function() { $('#link-about').css({"font-family":"", "color": ""});
//
//}, offset: '-25%' });
