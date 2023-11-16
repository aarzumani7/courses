$(".open-popup3").click(function (e) {
  e.preventDefault();
  $(".popup-bg3").fadeIn(800);
  $("html").addClass("no-scroll");
});

$(".close-popup3").click(function () {
  $(".popup-bg3").fadeOut(800);
  $("html").removeClass("no-scroll");
});
