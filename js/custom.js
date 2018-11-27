(function() {
    $( document ).ready(function() {


        // $(".skills-btn", ".home-btn", ".projects-btn", ".resume-btn", ".contact-btn").click(function() {
        //     $(".home", ".skills", ".projects", ".resume", ".contact").toggle();
        // });
        $(".home-btn").click(function(){
            $(".home").toggle();
        })

        $('.skills-btn').click(()=>{
            $('.hide').toggle()
        });





    });
})();