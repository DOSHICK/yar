const swiper = new Swiper('.swiper.students', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 64,
  navigation: {
    nextEl: ".students__navigation>.swiper-button-next",
    prevEl: ".students__navigation>.swiper-button-prev",
  },
  /* работает, как media(min-width: ширина) */
  breakpoints: {

    1040: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 100
    },
    0: {
      slidesPerView: 1,
    }

  }
})

const swiperEventBlock1 = new Swiper('.swiper.event_1', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 64,
  navigation: {
    nextEl: ".event__navigation>.swiper-button-next",
    prevEl: ".event__navigation>.swiper-button-prev",
  },
  slideToClickedSlide: true,
  noSwiping: false
})

const swiperEventBlock2 = new Swiper('.swiper.event_2', {
  // Default parameters
  spaceBetween: 20,
  slidesPerView: 1,
  slideToClickedSlide: true,
  noSwiping: true
});



swiperEventBlock2.controller.control = swiperEventBlock1
swiperEventBlock1.controller.control = swiperEventBlock2

// let SwiperWrapper = document.querySelector(".swiper-wrapper.event__wrapper");

// function walkThrough() {

// }

