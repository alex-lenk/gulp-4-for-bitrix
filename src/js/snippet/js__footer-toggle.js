if ($(window).width() <= 991) {
  $('.js__footer-toggle').click(function () {
    $(this).toggleClass('footer-nav__open').next().slideToggle();
  });
}
