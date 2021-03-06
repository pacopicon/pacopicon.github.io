$(window).load(function(){ 
//$(document).ready(function() {
    
var testTrakkerVideo;
    
function onYouTubeIframeAPIReady() {
    vid = new YT.player('testTrakkerVid');
    
    console.log('Video API is loaded');
    
    vid.addEventListener("OnReady", "onYouTubePlayerReady");
    vid.addEventListener("onStateChange", "onYouTubePlayerStateChange");
}
    
function onYouTubePlayerReady() {
    console.log('Video is ready to play');
}
    
function onYouTubePlayerStateChange(event) {
    console.log('Video state changed');
}
    
function onPlayerStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.UNSTARTED:
      console.log('unstarted');
      break;
    case YT.PlayerState.ENDED:
      console.log('ended');
      (function() {
        $(".listo p").css('color', 'black');
        $('#wrapper-two').css("opacity", 0.82);
        }
      );
      break;
    case YT.PlayerState.PLAYING:
      console.log('playing');
      (function() {
        $(".testtrakker p").css('color', '#33ccff');
        $('#wrapper-two').css("opacity", 1);
        }
      ); 
      break;
    case YT.PlayerState.PAUSED:
      console.log('paused');
      break;
    case YT.PlayerState.BUFFERING:
      console.log('buffering');
      break;
    case YT.PlayerState.CUED:
      console.log('video cued');
      break;
  }
}

if ($(window).width() <= 797.49) {
    var wayOffset = 300;
//    var wayOffset = ($('scrollStop').height());
//    var hbMinWidth = $('.hamburgerMenu ul').width();
//    $('.hamburgerMenu').css("min-width", hbWidth);
    var smNavMinHeight = $('.brand').css("font-size");
    $('.small-nav').css("min-height", smNavMinHeight);
    var navHeight = $('.small-nav').height();
    $('.hamburgerMenu').css("top", (navHeight + 0.2));
    

    
} else {
    var wayOffset = 40;
//    var wayOffset = ($('scrollStop').height());
//    var wayOffset = ($('nav').height());
//    var heightNum = $('nav').css("height") - 50px;
//    var wayOffset = (heightNum);
}

    
    wrapperOneHighlight = new Waypoint({
        element: $('#wrapper-one'),
        handler: function(direction) {
            if (direction == 'down') {
              $(".linkOne").addClass('highlight');
              $(".linkOne").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
        }, offset: wayOffset});

    wrapperTwoHighlight = new Waypoint({
        element: $('#wrapper-two'),
        handler: function(direction) {
            if (direction == 'down') {
              $(".linkTwo").addClass('highlight');
              $(".linkTwo").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
        }, offset: wayOffset});

    wrapperThreeHighlight = new Waypoint({
        element: $('#wrapper-three'),
        handler: function(direction) {
            if (direction == 'down') {
              $(".linkThree").addClass('highlight');
              $(".linkThree").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
        }, offset: wayOffset});

    wrapperFourHighlight = new Waypoint({
        element: $('#wrapper-four'),
        handler: function(direction) {
            if (direction == 'down') {
              $(".linkFour").addClass('highlight');
              $(".linkFour").removeClass('unhighlighted');
            } else {
              $('li').children().removeClass('highlight');
              $('li').children().addClass('unhighlighted');
            };
        }, offset: wayOffset});

    wrapperOneHighlightDeleteDown = new Waypoint({
        element: $('#topOne'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $(".linkOne").addClass('highlight');
            $(".linkOne").removeClass('unhighlighted');
          };
        }, offset: '100px'});

    wrapperTwoHighlightDeleteDown = new Waypoint({
        element: $('#topTwo'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $(".linkTwo").addClass('highlight');
            $(".linkTwo").removeClass('unhighlighted');
          };
        }, offset: '100px'});

    wrapperThreeHighlightDeleteDown = new Waypoint({
        element: $('#topThree'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $(".linkThree").addClass('highlight');
            $(".linkThree").removeClass('unhighlighted');
          };
        }, offset: '100px'});

    wrapperFourHighlightDeleteDown = new Waypoint({
        element: $('#topFour'),
        handler: function(direction) {
          if (direction == 'down') {
            $('li').children().removeClass('highlight');
            $('li').children().addClass('unhighlighted');
          } else {
            $(".linkFour").addClass('highlight');
            $(".linkFour").removeClass('unhighlighted');
          };
        }, offset: '100px'});
    
    // Smooth-scrolling function from CSS Tricks
    
    $(function() {
        
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    return false;
                    }
            }
        });
        
        $('.testtrakkerPicLink').hover(
            (function() {
                $(".testtrakker p").css('color', '#33ccff');
                $('#wrapper-two').css("opacity", 1);
            }), 
            (function() {
                $(".listo p").css('color', 'black');
                $('#wrapper-two').css("opacity", 0.82);
            })
        );
        $('.testTrakkerVideo').hover(
            (function() {
                $(".testtrakker p").css('color', '#33ccff');
                $('#wrapper-two').css("opacity", 1);
            }), 
            (function() {
                $(".listo p").css('color', 'black');
                $('#wrapper-two').css("opacity", 0.82);
            })
        );
        $('.listoPicLink').hover(
            (function() {
                $(".listo p").css('color', '#33ccff');
                $('#wrapper-two').css("opacity", 1);
            }), 
            (function() {
                $(".listo p").css('color', 'black');
                $('#wrapper-two').css("opacity", 0.82);
            })
        );
        $('.bloccitPicLink').hover(
            (function() {
                $(".bloccit p").css('color', '#33ccff');
                $('#wrapper-two').css("opacity", 1);
            }), 
            (function() {
                $(".bloccit p").css('color', 'black');
                $('#wrapper-two').css("opacity", 0.82);
            })
        );
        $('.blocJamsPicLink').hover(
            (function() {
                $(".blocJams p").css('color', '#33ccff');
                $('#wrapper-two').css("opacity", 1);
            }), 
            (function() {
                $(".blocJams p").css('color', 'black');
                $('#wrapper-two').css("opacity", 0.82);
            })
        );
});
    
// Hamburger & x-out listeners
    
    // Apple devices: variables
    
//    var p4 = 320, // iphone 4 portrait
//        l4 = 480, // iphone 4 landscape
//        p5 = 320, // iphone 5 port
//        l5 = 568, // iphone 5 land
//        p6 = 375, // iphone 6 port
//        l6 = 667, // iphone 6 land
//        p6p = 414, // iphone 6+ port
//        l6p = 736, // iphone 6+ land
//        ppad = 768, // ipad port
//        lpad = 1024, // ipad land

    
        var menuMove = function() {
            if ($(window).width() <= 798) {
                var wWidth = $(window).width();
                var hbWidth = $('.hamburgerMenu').width();
                $('.hamburgerMenu').css("right", ((hbWidth) * -1));  
                

                $(".hamburger").click(function () {
                    $(".hamburgerMenu").animate({right: '+=' + hbWidth});
                    $(".content").animate({width: '-=' + hbWidth});
                    $(".hamburger").hide();    
                });

                $(".x-out").click(function () {
                    $(".hamburgerMenu").animate({right: '-=' + hbWidth});
                    $(".content").animate({width: '+=' + hbWidth});
                    $(".hamburger").show();
                });
            }
            }();
    
        $(window).on("orientationchange", function(event) {
            location.reload();
            menuMove;
        });

        $(window).resize(function(){
            location.reload();
            menuMove;
        });
    
 
    
//    (function () {
//        $('.console').text("the .width() of this device is: " + $(window).width() +"; the .innerwidth() of this device is: " + $(window).innerWidth() + "the .height() of this device is: " + $(window).height() + "; the .innerHeight() of this device is: " + $(window).innerHeight());
//    }());
       
    // Sticky nav function
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

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/

// Waypoints function to adapt jquery.waypoints.js to index.html

!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportinnerWidth=function(){return document.documentElement.clientinnerWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerinnerWidth()-this.adapter.outerinnerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerinnerWidth=function(){return this.element==this.element.window?n.viewportinnerWidth():this.adapter.innerinnerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerinnerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerinnerWidth","off","offset","on","outerHeight","outerinnerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
