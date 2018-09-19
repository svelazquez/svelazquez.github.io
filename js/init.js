(function($){

  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

      var animation = "animated flipInX";
      var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';


    $("#intro-button").click(function(){
      $("#intro>*").addClass(animation).one(animationEnd,
          function(){
        $(this).removeClass(animation);
          });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
