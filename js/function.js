$(document).ready(function(){
    // $(".menu-btn").click(function(){
    //     $('#aside').collapse('toggle');
    // });
   setTimeout(function() {
       $("#design-title, #break-title").fadeIn("slow");
   },500);
    //CAROUSEL OPTIONS
    $('.carousel').carousel({
        interval: 3000,
        keyboard: true
    });
    //KEYBOARD CAROUSEL CONTROLS LEFT/RIGHT
    $(document).keyup(function(event){
        if(event.keyCode === 39) {
            $('.carousel').carousel('next');
        } else if(event.keyCode === 37){
            $('.carousel').carousel('prev');
        }
    });

//     /**
//      * Copyright 2012, Digital Fusion
//      * Licensed under the MIT license.
//      * http://teamdf.com/jquery-plugins/license/
//      *
//      * @author Sam Sehnert
//      * @desc A small plugin that checks whether elements are within
//      *     the user visible viewport of a web browser.
//      *     only accounts for vertical position, not horizontal.
//      */
//
//     $.fn.visible = function(partial) {
//
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;
//
//         return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//     };
//
// })(jQuery);
//
//
//     /**
//      * When window scrolls, add class
//      */
//
//     $(window).scroll(function(event) {
//
//         $(".module").each(function(i, el) {
//             var el = $(el);
//             if (el.visible(true)) {
//                 el.addClass("come-in");
//             }
//         });
//
//     });
//
//     /**
//      * If already visible, don't add class
//      */
//     var win = $(window);
//     var allMods = $(".module");
//
//     // Already visible modules
//     allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             el.addClass("already-visible");
//         }
//     });
//
//     win.scroll(function(event) {
//
//         allMods.each(function(i, el) {
//             var el = $(el);
//             if (el.visible(true)) {
//                 el.addClass("come-in");
//             }
//         });
//
// });
//



});