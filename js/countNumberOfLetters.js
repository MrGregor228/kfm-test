function onLoadAnonsesTexts() {
  $('.sec2 .one').text($('.sec2 .one').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec2 .one').html($(".sec2 .one").text().replace(/(.{100}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.sec2 .two').text($('.sec2 .two').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec2 .two').html($(".sec2 .two").text().replace(/(.{100}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.sec2 .three').text($('.sec2 .three').text().replace(/(\n|\r|\f)/g, ' '));
  $('.sec2 .three').html($(".sec2 .three").text().replace(/(.{100}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));
}
onLoadAnonsesTexts();

function onLoadSliderTexts() {
  $('.slider-text-first').text($('.slider-text-first').text().replace(/(\n|\r|\f)/g, ' '));
  $('.slider-text-first').html($(".slider-text-first").text().replace(/(.{250}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.slider-text-second').text($('.slider-text-second').text().replace(/(\n|\r|\f)/g, ' '));
  $('.slider-text-second').html($(".slider-text-second").text().replace(/(.{250}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.slider-text-third').text($('.slider-text-third').text().replace(/(\n|\r|\f)/g, ' '));
  $('.slider-text-third').html($(".slider-text-third").text().replace(/(.{250}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));

  $('.slider-text-fourth').text($('.slider-text-fourth').text().replace(/(\n|\r|\f)/g, ' '));
  $('.slider-text-fourth').html($(".slider-text-fourth").text().replace(/(.{250}).{0,}/, "$1... <i class='fal fa-long-arrow-right'></i>"));
}
onLoadSliderTexts();

// Временно
$(".owl-item a").click(function (e) {
  e.preventDefault();
});
