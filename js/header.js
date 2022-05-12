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


// работа с burger
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



// работа с кнопками, имеющими выпадающий список в header
let listedBlocks = document.querySelectorAll("li.nav__item.listed");
function changeLinksToBtns() {
  if (window.innerWidth > 1150) {
    for (let index = 0; index < listedBlocks.length; index++) {
      let currentBlock = listedBlocks[index]
      let requiredLink = currentBlock.querySelector("a.nav__link")
      let requiredLinkHref = requiredLink.href;
      requiredLink.setAttribute("value", requiredLinkHref);
      requiredLink.removeAttribute("href");

      requiredLink.onclick = function(){
        let itemList = currentBlock.querySelector(".nav__item__list")
        itemList.classList.toggle("visible")
      }
    }
  } else {
    for (let index = 0; index < listedBlocks.length; index++) {
      let currentBlock = listedBlocks[index]
      let requiredLink = currentBlock.querySelector("a.nav__link")
      let requiredLinkHref = requiredLink.href;
      let requiredLinkValue = requiredLink.value;
      requiredLink.setAttribute("value", requiredLinkHref);
    }
  }
}
changeLinksToBtns()


