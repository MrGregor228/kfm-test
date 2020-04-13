$(document).ready(function () {
  $('.sec2 .card-text').text($('.sec2 .card-text').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec2 .card-text').html($(".sec2 .card-text").text().replace(/(.{150}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));
});
