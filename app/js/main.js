$(function () {
     
      $('.reviews__items').slick({
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 900,
        fade: true,
        cssEase: 'linear',
        dots:true,
        dotsClass:'reviews__slick-dots',
          });

      $('.header__basket-icon').on('click', function () {
        $('.basket__inner').toggleClass('active');
      });
     
      new WOW().init();


    });
    
    let $layers = $('div[data-role="layer"]');
  
$(window).on('scroll', function(e) {
   
  $layers.each(function(i) {
    let $layer = $(this),
        coef = $layer.data('coef'),
        scroll = $(window).scrollTop();
         
    $layer.css('top' , (scroll * coef) + 'px');
  });
   });