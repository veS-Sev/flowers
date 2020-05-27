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

    
      $('.menu__btn').on('click', function () {
        $('.header__nav-left').slideToggle();
        $('.header__nav-right').slideToggle();
      });
    
    });
    
    let $layers = $('div[data-role="layer"]');
  
$(window).on('scroll', function(e) {
   
  $layers.each(function(i) {
    let $layer = $(this),
        coef = $layer.data('coef'),
        scroll = $(window).scrollTop();
         
    $layer.css('top' , (10 + scroll * coef) + 'px');
  });
   });

   window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > document.body.clientHeight|| document.documentElement.scrollTop > document.body.clientHeight) {
        document.getElementById("top__btn").style.display = "flex";
    } else {
        document.getElementById("top__btn").style.display = "none";
    }
}