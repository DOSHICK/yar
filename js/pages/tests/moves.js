const Moves = document.querySelector(".tests__moves")


let movesItem = document.querySelectorAll(".test__moves-item");
for(let index = 0; index < movesItem.length; index++){
  movesItem[index].onclick = function(){
    if(Moves.classList.contains("opened")){
      let currentItem = document.querySelector(".test__moves-item.current");
      currentItem.classList.remove("current")
      movesItem[index].classList.add("current")
      Moves.classList.toggle("opened")
    }else{
      Moves.classList.toggle("opened")
    }
  }
}



