// fixed header
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerEl.offsetHeight) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});

// simple swiper slider whith2 card
const swiper = new Swiper('.feedback .swiper', {
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
});
