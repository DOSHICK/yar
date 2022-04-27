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

const swiper1 = new Swiper('.swiper.offer__alpha-wrapper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 64,
  navigation: {
    nextEl: ".offer__navigation>.swiper-button-next",
    prevEl: ".offer__navigation>.swiper-button-prev",
  },

})

let offerBtn = document.querySelector('.offer__btn');
offerBtn.onclick = function () {
  changePopupVisibility()
}
let popupBtn = document.querySelector(".popup-form-submit__btn");
popupBtn.onclick = function () {
  changePopupVisibility()
}

function changePopupVisibility() {
  let body = document.querySelector('body');
  body.classList.toggle("none-scroll");

  let popupForm = document.querySelector('.popup-form-submit')
  popupForm.classList.toggle("visible")
}