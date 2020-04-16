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

$('#anonseThree').click(function () {
    $('#modalThird').css("opacity", "1");
    $('#modalThird').css("visibility", "visible");
});


//                  News modals


$('#newsOne').click(function (e) {
    e.preventDefault();
    $('#modalNewsOne').css("opacity", "1");
    $('#modalNewsOne').css("visibility", "visible");
});

$('#newsTwo').click(function (e) {
    e.preventDefault();
    $('#modalNewsTwo').css("opacity", "1");
    $('#modalNewsTwo').css("visibility", "visible");
});

$('#newsThree').click(function (e) {
    e.preventDefault();
    $('#modalNewsThree').css("opacity", "1");
    $('#modalNewsThree').css("visibility", "visible");
});

$('#newsFour').click(function (e) {
    e.preventDefault();
    $('#modalNewsFour').css("opacity", "1");
    $('#modalNewsFour').css("visibility", "visible");
});


//                       project modals


$('#projectOne').click(function (e) {
    e.preventDefault();
    $('#modalProjectOne').css("opacity", "1");
    $('#modalProjectOne').css("visibility", "visible");
});

$('#projectTwo').click(function (e) {
    e.preventDefault();
    $('#modalProjectTwo').css("opacity", "1");
    $('#modalProjectTwo').css("visibility", "visible");
});

$('#projectThree').click(function (e) {
    e.preventDefault();
    $('#modalProjectThree').css("opacity", "1");
    $('#modalProjectThree').css("visibility", "visible");
});

$('#projectFour').click(function (e) {
    e.preventDefault();
    $('#modalProjectFour').css("opacity", "1");
    $('#modalProjectFour').css("visibility", "visible");
});