const swiper = new Swiper('.swiper.similarly', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 64,
  navigation: {
    nextEl: ".similarly__navigation>.swiper-button-next",
    prevEl: ".similarly__navigation>.swiper-button-prev",
  },
  /* работает, как media(min-width: ширина) */
  breakpoints: {

    850: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40
    },
  }
})







