let filterItem = document.querySelectorAll(".filter__item");



for (let index = 0; index < filterItem.length; index++ ){
  let currentItem = filterItem[index];
  let filterItemHeader = currentItem.querySelector(".filter__header");
  let filterItemBody = currentItem.querySelector(".filter__body");


  filterItemHeader.onclick = function () {
    filterItemBody.classList.toggle("body-visible");
    filterItemHeader.querySelector(".filter__btn").classList.toggle("body-visible");
  }
}