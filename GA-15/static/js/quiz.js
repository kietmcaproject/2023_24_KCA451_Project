// var quizData1 = [{
//         question: "Which of the following is a client site language?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "JavaScript",
//         correct: "d",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Cascading Style Sheet",
//         c: "Jason Object Notation",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
//     {
//         question: "What does CSS stands for?",
//         a: "Hypertext Markup Language",
//         b: "Cascading Style Sheet",
//         c: "Jason Object Notation",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "b",
//     }
// ];



        
        


// let index = 0;
// let correct = 0,
//     incorrect = 0,
//     total = quizData.length;

// let questionBox = document.getElementById("questionBox");
// let allInputs = document.querySelectorAll("input[type='radio']");

// const loadQuestion = () => {
//     if (total === index) {
//         return quizEnd();
//     }
//     reset();
//     const data = quizData[index];
//     questionBox.innerHTML = `${index + 1}) ${data.quetion}`;
//     allInputs[0].nextElementSibling.innerText = data.a;
//     allInputs[1].nextElementSibling.innerText = data.b;
//     allInputs[2].nextElementSibling.innerText = data.c;
//     allInputs[3].nextElementSibling.innerText = data.d;
// };



// document.querySelector("#submit").addEventListener(
//     "click",
//     function() {
//         const data = quizData[index]
//         const ans = getAnswer()
//         if (ans === data.correct) {
//             correct++;
//         } else {
//             incorrect++;
//         }
//         index++;
//         loadQuestion()
//     }
// )

// const getAnswer = () => {
//     let ans;
//     allInputs.forEach(
//         (inputEl) => {
//             if (inputEl.checked) {
//                 ans = inputEl.value;
//             }
//         }
//     )
//     return ans;
// }

// const reset = () => {
//     allInputs.forEach(
//         (inputEl) => {
//             inputEl.checked = false;
//         }
//     )
// }

// const quizEnd = () => {
//     // console.log(document.getElementsByClassName("container"));
//     document.getElementsByClassName("container")[0].innerHTML = `
//         <div class="col">
//             <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
//         </div>
//     `
// }
// loadQuestion(index);








// <link rel="stylesheet" href="/static/css/quiz_style.css" />
// <section class="main">
//   <div class="container">
//     <div class="col">
//       <h3 id="questionBox">
//         1) Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis?
//       </h3>
//     </div>
//     <div class="col box">
//       <input name="option" type="radio" id="first" value="a" required />
//       <label for="first">Testing 1</label>
//     </div>
//     <div class="col box">
//       <input name="option" type="radio" id="second" value="b" required />
//       <label for="second">Testing 2</label>
//     </div>
//     <div class="col box">
//       <input name="option" type="radio" id="third" value="c" required />
//       <label for="third">Testing 3</label>
//     </div>
//     <div class="col box">
//       <input name="option" type="radio" id="fourth" value="d" required />
//       <label for="fourth">Testing 4</label>
//     </div>
//     <button id="submit">Submit</button>
//   </div>
//   <div id="quiz-container"></div>
// </section>
// <script>
//   fetch("/get-quiz-data/")
//     .then((response) => response.json())
//     .then((quizData) => {
//       const quizContainer = document.getElementById("quiz-container");
//       let index = 0;
//       let correct = 0,
//         incorrect = 0,
//         total = quizData.length;
//         console.log(total);
//       let questionBox = document.getElementById("questionBox");
//       let allInputs = document.querySelectorAll("input[type='radio']");

//       const loadQuestion = () => {
//         if (total === index) {
//           return quizEnd();
//         }
//         reset();
//         const data = quizData[index];
//         questionBox.innerHTML = `${index + 1}) ${data.quetion}`; // Fix typo in 'quetion' to 'question'
//         allInputs[0].nextElementSibling.innerText = data.option_a;
//         allInputs[1].nextElementSibling.innerText = data.option_b;
//         allInputs[2].nextElementSibling.innerText = data.obtion_c;
//         allInputs[3].nextElementSibling.innerText = data.option_d;
//       };

//       // Function to retrieve selected answer
//       const getAnswer = () => {
//         for (let i = 0; i < allInputs.length; i++) {
//           if (allInputs[i].checked) {
//             return allInputs[i].value;
//           }
//         }
//         return null; // Return null if no answer is selected
//       };

//       // Function to reset radio inputs
//       const reset = () => {
//         allInputs.forEach((input) => {
//           input.checked = false;
//         });
//       };

//       document.querySelector("#submit").addEventListener("click", function () {
//         const data = quizData[index];
//         const ans = getAnswer();
//         if (ans === data.correct) {
//           correct++;
//         } else {
//           incorrect++;
//         }
//         index++;
//         loadQuestion();
//       });
//     });

//     const getAnswer = () => {
//         let ans;
//         allInputs.forEach(
//             (inputEl) => {
//                 if (inputEl.checked) {
//                     ans = inputEl.value;
//                 }
//             }
//         )
//         return ans;
//     }


//     const reset = () => {
//         allInputs.forEach(
//             (inputEl) => {
//                 inputEl.checked = false;
//             }
//         )
//     }

//     const quizEnd = () => {
//         console.log("khatam hua khel")
//         document.getElementsByClassName("container")[0].innerHTML = `
//             <div class="col">
//                 <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
//             </div>
//         `
//     }
// </script>