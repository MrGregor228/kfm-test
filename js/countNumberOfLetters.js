$(document).ready(function () {
  $('.sec2 .card-text').text($('.sec2 .card-text').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec2 .card-text').html($(".sec2 .card-text").text().replace(/(.{150}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.sec3 .slider-text').text($('.sec3 .slider-text').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec3 .slider-text').html($(".sec3 .slider-text").text().replace(/(.{250}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));
});
