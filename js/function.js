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

});