// Демонстрация

let changers = document.querySelectorAll(".changer")
let changed = document.querySelectorAll(".changes")

for (let index = 0; index < changers.length; index++) {
  changers[index].onclick = function () {
    for (let index2 = 0; index2 < changed.length; index2++) {
      changed[index2].classList.toggle("active")
    }
  }
}



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