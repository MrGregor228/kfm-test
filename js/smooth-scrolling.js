var menuOpen = document.querySelector(".menu-trigger-open"),
    menuClose = document.querySelector(".menu-trigger-close"),
    menu = document.getElementById('menu');

function showMenu() {    
    menuOpen.style.opacity = "0";
    menuClose.style.opacity = "1";
    menuClose.style.display = "block";
    menu.style.display = "block";
    setTimeout(function() {
        menu.style.opacity = "1";
        menuOpen.style.display = "none";
    }, 300);
}
function hideMenu() {
    menuOpen.style.opacity = "1";
    menuOpen.style.display = "block";
    menuClose.style.opacity = "0";
    menu.style.opacity = "0";
    setTimeout(function() {
        menu.style.display = "none";
        menuClose.style.display = "none";
    }, 300);
}
console.log(menuOpen);
console.log(menuClose);

$(document).ready(function(){    

    $(".menu-link").on("click","a", function (event) {

        event.preventDefault();

        hideMenu();

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