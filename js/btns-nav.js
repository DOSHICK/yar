let btnsNav = document.querySelector(".btns-nav")

// показать/скрыть блок btns-nav
let promoFind = document.getElementById("promo-find")

promoFind.onclick = function () {
  btnsNav.classList.toggle("promo-visible")
}

//  
const promoArray = [
  {
    name: "Miracle",
    percent: "10%"
  },
]

let promoCheck = document.getElementById("promo-check")
promoCheck.onclick = function () {
  let promoInput = document.getElementById("promo-input")
  ValidatePromo(promoInput.value)
}

function ValidatePromo(someValue) {
  let placeForValue = document.getElementById("promo__error-name")
  if (someValue === promoArray[0].name) {
    btnsNav.classList.add("promo-active");
  } else {
    btnsNav.classList.add("promo-error");
    placeForValue.innerHTML = (someValue)
  }
  return
}