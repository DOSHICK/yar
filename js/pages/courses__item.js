//  course-faq работа аккордеона
let conditionBtn = document.querySelectorAll(".course-faq__condition");

for(let index = 0; index < conditionBtn.length; index++){
  let currentBtn = conditionBtn[index];
  let currentBlock = currentBtn.parentNode.parentNode;
  currentBtn.onclick = function(){
    currentBlock.classList.toggle("body-visible");
  }
}


function offerShuffle(){
  let offer = document.querySelector(".offer")
  let wrapper = offer.querySelector(".offer__wrapper")
  let block1 = wrapper.querySelector(".offer__block_1")
  let block2 = wrapper.querySelector(".offer__block_2")
  
  wrapper.classList.add("offer__block_1" + "offer__block_2")

  let bntsBlock = wrapper.querySelector(".btns-nav");
  let socials = wrapper.querySelector(".ya-share2");

  block2.appendChild(bntsBlock);
  block2.appendChild(socials);

}



function checkResolution(){
  if(window.innerWidth < 950){
    offerShuffle()
  }
}
checkResolution()

window.addEventListener("resize", function() {
  checkResolution()
});