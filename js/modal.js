function closeModal() {
    $('.modal-window').css("opacity", "0");
    setTimeout(function () {
        $('.modal-window').css("visibility", "hidden");
    },500);    
}


$('#anonseOne').click(function () {
    $('#modalFirst').css("opacity", "1");
    $('#modalFirst').css("visibility", "visible");
});

$('#anonseTwo').click(function () {
    $('#modalSecond').css("opacity", "1");
    $('#modalSecond').css("visibility", "visible");
});

// anonseThree
// anonseFour
// anonseFive
// anonseSix