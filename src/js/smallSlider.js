$(document).ready(function smallSlider() {
  $('.slider__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    infinite: true,

  });
});


$('.slider__prev').click(function() {
  $('.slider__slides').slick('slickPrev');
});

$('.slider__next').click(function() {
  $('.slider__slides').slick('slickNext');
});
// $('.slider').css({'height':'auto', 'overflow':'visible'});
