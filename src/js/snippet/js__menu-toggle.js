$(document).ready(function () {
  $('.js__menu-toggle').click(function () {
    $('body').toggleClass('menu-opened');
    $('.darkening-layer').fadeToggle();
  });

  $('.darkening-layer').click(function () {
    $('body').removeClass('menu-opened');
    $('.darkening-layer').fadeOut();
  });
});
