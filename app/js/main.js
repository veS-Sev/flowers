$(function () {


  $('.slider__inner').slick({
    infinite: true,
    autoplay: true,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    prevArrow:'.slider__arrow-left',
    nextArrow:'.slider__arrow-right'
      });
});