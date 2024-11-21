// /*Using selectors*/
// const questions = document.querySelectorAll(".question-tag");

// questions.forEach(function (question) {
//   //console.log(question);
//   const btn = question.querySelector(".question-btn");
//   //console.log(btn);
//   btn.addEventListener("click", function () {
//     questions.forEach(function (item) {
//       //console.log(item);
//       if (item !== question) {
//         item.classList.add("show-link");
//       }
//     });
//     question.classList.toggle("show-link");
//   });
// });

/*tranversing the Dom */

/*
const btn = document.querySelectorAll(".question-btn");

btn.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    const question = e.currentTarget.parentElement.parentElement;
    const item = question;
   

    question.classList.toggle("show-link");
  });
});
*/
const question = [
  {
    quest: "Do you use organic ingredients?",
    line: " ----------------------------------------------------------------------------------------------------------------",
    info: " Yes I do, tea tree amet consectetur adipisicing elit. Veritatis fuga ullam alias iste. Magnam consequatur laboriosam aliquid consectetur sed ducimus vel?",
  },
  {
    quest: "Do you like using facescrub?",
    line: " ----------------------------------------------------------------------------------------------------------------",
    info: " facescrub is made from Lorem ipsum dolor sit amet  elit. Veritatis fuga ullam alias iste. Magnam consequatur laboriosam aliquid consectetur sed ducimus vel?",
  },
  {
    quest: "How can Aloevera be helpful to me?",
    line: " ----------------------------------------------------------------------------------------------------------------",
    info: "  Aloevera can  be helpful  when consectetur adipisicing elit. Veritatis fuga ullam alias iste. Magnam consequatur laboriosam aliquid consectetur sed ducimus vel?",
  },
  {
    quest: "What combination of food is best for breakfast?",
    line: " ----------------------------------------------------------------------------------------------------------------",
    info: " Lorem ipsum is best for breakfast. Veritatis fuga ullam alias iste. Magnam consequatur laboriosam aliquid consectetur sed ducimus vel?",
  },
];
const qSECT = document.querySelector(".question-section");

let displayQuestion = question.map((values) => {
  return ` <article class="question-tag show-link">
  <div class="question-title">
  <!-- ---------question-title------------ -->
  <p class="title-par">${values.quest} </p>
  
            <button type="button" class="question-btn">
            <span class="plus-btn"
            ><ion-icon name="add-circle-outline"></ion-icon
              ></span>
              <span class="minus-btn">
              <ion-icon name="remove-circle-outline"></ion-icon
              ></span>
              </button>
              </div>
              
              <!-- ---------question-title end------------ -->

          <!-- ------------question-text------------------------ -->
          <div class="question-text">
            <p class="line">
            ${values.line}
            </p>
            ${values.info}
            </div>
            </article>`;
});
displayQuestion.join("");
qSECT.innerHTML = displayQuestion;

const qTAG = document.querySelectorAll(".question-tag");
qTAG.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    question.classList.toggle("show-link");
    //console.log(question);
    qTAG.forEach((item) => {
      //console.log(item);
      if (question !== item) {
        item.classList.add("show-link");
      }
    });
  });
});
