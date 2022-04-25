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