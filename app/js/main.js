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

      $('.reviews__items').slick({
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 900,
        fade: true,
        cssEase: 'linear',
        dots:true,
        dotsClass:'reviews__slick-dots',

        // appendDots:$('.reviews__items-dots')
        // prevArrow:'.slider__arrow-left',
        // nextArrow:'.slider__arrow-right'
          });

      $('.header__basket-icon').on('click', function () {
        $('.basket__inner').toggleClass('active');
      });


});