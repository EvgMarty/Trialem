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
  slidesPerView: 1,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// TABS

const showTabs = (tabsNav, tabsContent) => {
  tabsNav?.forEach((navLink, index) => {
    navLink?.addEventListener('click', () => {
      tabsNav.forEach((link) => {
        link.classList.remove('active');
      });

      navLink.classList.add('active');

      let navIndex = index;

      tabsContent.forEach((contentItem, index) => {
        contentItem.classList.remove('active');

        if (index === navIndex) {
          contentItem.classList.add('active');
        }
      });
    });
  });
};

const tabsNav = document.querySelectorAll('.bikes .tabs-nav__link');
const tabsContent = document.querySelectorAll('.bikes  .tabs-content');
showTabs(tabsNav, tabsContent);

// burger menu
const burgerBtnEl = document.querySelector('.burger');

const hunfleBurgerClick = () => {
  burgerBtnEl.classList.toggle('active');
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) {
    hunfleBurgerClick();
  }
});
