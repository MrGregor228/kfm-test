function closeModal() {
    // $('.modal-window').addClass('closed'); 
    $('.modal-window').css("opacity", "0");
    $('.modal-window').addClass('closed'); 
    setTimeout(function () {
        $('.modal-window').css("visibility", "hidden");
    },500);    
}


$('#anonseOne').click(function () {
    $('#modalFirst').removeClass('closed');
    $('#modalSecond').addClass('showModal');
    $('.modal-window').css("opacity", "1");
    $('.modal-window').css("visibility", "visible");
});

$('#anonseTwo').click(function () {
    $('#modalSecond').removeClass('closed');    
    $('#modalSecond').addClass('showModal');
    $('.modal-window').css("opacity", "1");
    $('.modal-window').css("visibility", "visible");
});

// anonseThree
// anonseFour
// anonseFive
// anonseSix