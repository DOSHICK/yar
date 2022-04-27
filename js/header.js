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


let burgerBtn = document.getElementById("burger-btn");
burgerBtn.onclick = function () {
  changeBurgerImg();
  changeBurgerVisibility();
  changeBodyScrolling();
}

function changeBurgerImg() {
  burgerBtn.classList.toggle("header__burger_active");
}

function changeBurgerVisibility() {
  // Добавление класса кнопке бургера
  let burger = document.getElementById("header__block");
  burger.classList.toggle("burger-visible");
  // Добавление класса header'у (для залития фоном)
  let header = document.querySelector("header.header");
  header.classList.toggle("burger-visible");
}

function changeBodyScrolling() {
  let body = document.querySelector("body")
  body.classList.toggle("none-scroll")
}




