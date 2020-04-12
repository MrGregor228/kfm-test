function closeModal() {
    $('.modal-window').addClass('closed'); 
    setTimeout(function () {
        $('.modal-window').css("display", "none");
    },500);    
}


$('#anonseOne').click(function () {
    $('#modalFirst').removeClass('closed');
    $('#modalFirst').addClass('showModal');
     $('.modal-window').css("display", "flex");
});

$('#anonseTwo').click(function () {
    $('#modalSecond').removeClass('closed');
    $('#modalSecond').addClass('showModal');
     $('.modal-window').css("display", "flex");
});

// anonseThree
// anonseFour
// anonseFive
// anonseSix