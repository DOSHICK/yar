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
      spaceBetween: 40
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




let lessonNav = document.querySelector(".lesson__nav")

// показать/скрыть блок lesson__nav
let promoFind = document.getElementById("promo-find")

promoFind.onclick = function(){
  
  lessonNav.classList.toggle("promo-visible")
}


//  
const promoArray = [
  {
    name: "Miracle",
    percent: "10%"
  },
]

let promoCheck = document.getElementById("promo-check")
promoCheck.onclick = function(){
  let promoInput = document.getElementById("promo-input")
  ValidatePromo(promoInput.value)
}

function ValidatePromo(someValue){
  let placeForValue = document.getElementById("promo__error-name")
  if(someValue === promoArray[0].name){
    lessonNav.classList.add("promo-active");
  }else{
    lessonNav.classList.add("promo-error");
    placeForValue.innerHTML = (someValue)
  }
}


