$(document).ready(function(){
  $('.hero-section').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    //dots: true,
    arrows: true,
    fade: true,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: true,
  });
});

$('.testimonials-carousel').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  //dots: true,
  arrows: false,
  speed: 1000,
  pauseOnFocus: false,
  pauseOnHover: true,
});
console.log('test')
