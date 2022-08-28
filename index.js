
//import ancientsData from './data/ancients';

const ancientsCard = document.querySelectorAll(".ancients-card");
const difficulty = document.querySelectorAll(".difficulty");
const difficultyContainer = document.querySelector(".difficulty-container");
const currentState = document.querySelector(".current-state"); 
const mix = document.querySelector(".mix");
let nameAncient = "";
const dotGreenStage1 = document.querySelector(".stage1 .dot.green");
const dotBrownStage1 = document.querySelector(".stage1 .dot.brown"); 
const dotBlueStage1 = document.querySelector(".stage1 .dot.blue"); 
const dotGreenStage2 = document.querySelector(".stage2 .dot.green");
const dotBrownStage2 = document.querySelector(".stage2 .dot.brown"); 
const dotBlueStage2 = document.querySelector(".stage2 .dot.blue"); 
const dotGreenStage3 = document.querySelector(".stage3 .dot.green");
const dotBrownStage3 = document.querySelector(".stage3 .dot.brown"); 
const dotBlueStage3 = document.querySelector(".stage3 .dot.blue"); 



console.log(dotGreenStage1);

//console.log(ancientsCard);
for (let i=0; i<ancientsCard.length; i++) {
    ancientsCard[i].classList.remove("active");
}
console.log(difficulty.length);

(function () {

    for (let i = 0; i < ancientsCard.length; i ++) {
        ancientsCard[i].addEventListener("click", () => {
            ancientsCard[i].classList.add("active");
          if (i != 0) {
            ancientsCard[0].classList.remove("active");
          }
          if (i != 1) {
            ancientsCard[1].classList.remove("active");
          }
          if (i != 2) {
            ancientsCard[2].classList.remove("active");
          } 
          if (i != 3) {
            ancientsCard[3].classList.remove("active");
          }     
          
          difficultyContainer.classList.add("active");


          if (i === 0 ) {
            nameAncient = "azathoth"; 
          }
          if (i === 1) {
            nameAncient = "cthulhu"; 
          }
          if (i === 2) {
            nameAncient = "iogSothoth"; 
          }
          if (i === 3) {
            nameAncient = "shubNiggurath"
          }
        });
      }

      for (let i = 0; i < difficulty.length; i ++) {
        difficulty[i].addEventListener("click", () => {
            difficulty[i].classList.add("active");
          if (i != 0) {
            difficulty[0].classList.remove("active");
          }
          if (i != 1) {
            difficulty[1].classList.remove("active");
          }
          if (i != 2) {
            difficulty[2].classList.remove("active");
          } 
          if (i != 3) {
            difficulty[3].classList.remove("active");
          }  
          if (i != 4) {
            difficulty[4].classList.remove("active");
          }      

          mix.classList.add("display-block");
        });
      }

    })();



    function setMixActive () {
      mix.classList.remove("display-block");
      currentState.classList.add("active");

      if(nameAncient === "azathoth" )
      {
        dotGreenStage1.textContent = 1; 
        dotBrownStage1.textContent = 1;
        dotBlueStage1.textContent = 2;
        dotGreenStage2.textContent = 2; 
        dotBrownStage2.textContent = 1;
        dotBlueStage2.textContent = 3;
        dotGreenStage3.textContent = 2; 
        dotBrownStage3.textContent = 0;
        dotBlueStage3.textContent = 4;
      }

      if(nameAncient === "cthulhu" )
      {
        dotGreenStage1.textContent = 0; 
        dotBrownStage1.textContent = 2;
        dotBlueStage1.textContent = 2;
        dotGreenStage2.textContent = 1; 
        dotBrownStage2.textContent = 0;
        dotBlueStage2.textContent = 3;
        dotGreenStage3.textContent = 3; 
        dotBrownStage3.textContent = 0;
        dotBlueStage3.textContent = 4;
      }

      if(nameAncient === "iogSothoth") {
        dotGreenStage1.textContent = 0; 
        dotBrownStage1.textContent = 1;
        dotBlueStage1.textContent = 2;
        dotGreenStage2.textContent = 2; 
        dotBrownStage2.textContent = 1;
        dotBlueStage2.textContent = 3;
        dotGreenStage3.textContent = 3; 
        dotBrownStage3.textContent = 0;
        dotBlueStage3.textContent = 4;
      }
      if(nameAncient === "shubNiggurath") {
        dotGreenStage1.textContent = 1; 
        dotBrownStage1.textContent = 1;
        dotBlueStage1.textContent = 2;
        dotGreenStage2.textContent = 3; 
        dotBrownStage2.textContent = 1;
        dotBlueStage2.textContent = 2;
        dotGreenStage3.textContent = 2; 
        dotBrownStage3.textContent = 0;
        dotBlueStage3.textContent = 4;
      }


    }

  

    mix.addEventListener("click", setMixActive);
    


