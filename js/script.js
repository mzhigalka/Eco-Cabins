
const swiper = new Swiper('.material__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

window.addEventListener('scroll', function() {
  if (scrollY > 50) {
    document.querySelector('.header').classList.add('header--active')
  } else {
    document.querySelector('.header').classList.remove('header--active')
  }
})