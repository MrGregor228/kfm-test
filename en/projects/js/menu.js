var menuOpen = document.querySelector(".menu-trigger-open"),
    menuClose = document.querySelector(".menu-trigger-close"),
    menu = document.getElementById('menu');

function showMenu() {    
$("#menu").css("display","block");
    $("#menu").removeClass("animated 1 slideOutRight delay-.3s");
    $("#menu").addClass("animated 1 slideInRight delay-.3s");
}
function hideMenu() {
$("#menu").removeClass("animated 1 slideInRight delay-.3s");
    $("#menu").addClass("animated 1 slideOutRight delay-.3s");
}