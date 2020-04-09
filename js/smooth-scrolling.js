$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top - 90}, 500);
    });

    // $(".top_button").on("click","a", function (event) {

    //     event.preventDefault();
 
    //     var id  = $(this).attr('href'),
 
    //         top = $(id).offset().top;
         
    //     $('body,html').animate({scrollTop: top}, 500);
    // });
    $('.angle-bottom').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - 70
        }, 500);
    });
});