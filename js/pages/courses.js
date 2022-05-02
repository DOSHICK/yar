let coursesImg = document.querySelectorAll(".courses-img")
console.log(coursesImg)
let popup = document.querySelector(".video-popup")

for(let index = 0; index < coursesImg.length; index++){
  coursesImg[index].onclick = function(){
    popup.classList.add("visible")
  }
}

popup.onclick = function(){
  popup.classList.remove("visible")
}