$(document).ready(function () {
  /* Слайдер на главной странице */
  $('.home-slider__list').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnDotsHover: true,
    easing: 'ease-in-out',
    edgeFriction: 0.2,
    cssEase: 'ease-in-out',
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__icon"><use xlink:href="/local/templates/static/img/sprite.svg#arrow-short"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__icon"><use xlink:href="/local/templates/static/img/sprite.svg#arrow-short"></use></svg></button>'
  });
});
