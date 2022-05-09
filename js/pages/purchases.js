let conditionBtn = document.querySelectorAll(".purchases__btn");

for(let index = 0; index < conditionBtn.length; index++){
  let currentBtn = conditionBtn[index];
  let currentBlock = currentBtn.parentNode.parentNode;
  currentBtn.onclick = function(){
    currentBlock.classList.toggle("body-visible");
  }
}