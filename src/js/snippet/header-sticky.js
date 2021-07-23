if ($(window).width() >= 992) {
  let headerSticky = $('.header-sticky');

  if (headerSticky.length) {
    let elementPosition = headerSticky.offset();

    $(window).scroll(function () {
      if ($(window).scrollTop() > elementPosition.top) {
        headerSticky.addClass("header-sticky__fixed");
      } else {
        headerSticky.removeClass("header-sticky__fixed");
      }
    });
  }
}
