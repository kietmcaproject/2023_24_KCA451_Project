// click any where in options to check/uncheck the check box
document.getElementById("option-form").addEventListener('click', function (e) {
    if (e != null && e.target.tagName == 'DIV' && e.target.id.substring(0,3) == 'opt' ) {
        let checkno = e.target.getAttribute("id").substring(3);

        document.getElementById('checkbox' + checkno).checked = !document.getElementById('checkbox' + checkno).checked;
    }
})

//Question and Answers

let questionsWithOptions = [
    {
        question: "How are you today?",
        answers: ["Happy", "Neutral", "Sad", "Excited", "Anxious", "Content"]
    },
    {
        question: "Whom actor do you like most?",
        answers: ["Tom Hanks", "Meryl Streep", "Leonardo DiCaprio", "Jennifer Lawrence", "Denzel Washington", "Emma Stone"]
    },
    {
        question: "You would like to watch a movie for what occasion?",
        answers: ["Birthday", "Date Night", "Family Gathering", "Relaxation", "Celebration", "Movie Night"]
    },
    {
        question: "Please choose any genre you are interested in?",
        answers: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"]
    },
    {
        question: "How old would you like the movie to be?",
        answers: ["New Release", "Recent", "Classic", "Vintage", "Modern", "Contemporary"]
    },
    {
        question: "Is the age-appropriateness rating of the movie important to you?",
        answers: ["Yes", "No", "Sometimes", "Depends on the movie", "Not sure", "Prefer not to say"]
    },
    {
        question: "Please select any other category you’re interested in.",
        answers: ["Documentary", "Animation", "Musical", "Adventure", "Fantasy", "Mystery"]
    },
    {
        question: "Have you watched any movies recently that you really liked? Or disliked?",
        answers: ["Liked", "Disliked", "Neither", "Both", "Can't remember", "Haven't watched any"]
    },
    {
        question: "Do you have a preference for movie length?",
        answers: ["Short", "Medium", "Long", "Epic", "No preference", "Depends on the movie"]
    }
];


let currentQuestionIndex = 0;

//Function displays the 
function displayQuestion() {
    let questionDisplay = document.getElementById("ques-div");
    let optionsDisplay = document.getElementById("option-form");
    let nextButton = document.getElementById("nextButton");
    questionDisplay.innerHTML = "";
    optionsDisplay.innerHTML = "";
    questionDisplay.textContent = questionsWithOptions[currentQuestionIndex].question;
    let options = questionsWithOptions[currentQuestionIndex].answers;
    for (let i = 0; i < options.length; i++) {
        let optionCheckbox = document.createElement("input");
        optionCheckbox.type = "checkbox";
        optionCheckbox.className = "checkbox pointer";
        optionCheckbox.value = options[i];
        optionCheckbox.id = "checkbox" + (i + 1);
        let optionLabel = document.createElement("label");
        optionLabel.className = "pointer";
        optionLabel.htmlFor = "checkbox" + (i + 1);
        optionLabel.textContent = options[i];
        let optionDiv = document.createElement("div");
        optionDiv.id = "opt" + (i + 1);
        optionDiv.className = "option pointer";
        optionDiv.appendChild(optionCheckbox);
        optionDiv.appendChild(optionLabel);
        optionsDisplay.appendChild(optionDiv);

    }

}
document.getElementById("nextButton").addEventListener("click", function () {
    let checkboxes = document.getElementsByClassName("checkbox");
    let isChecked = false;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
        }
    }
    // nextButton.disabled = !isChecked;
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsWithOptions.length) {
        currentQuestionIndex = questionsWithOptions.length-1;
        return;
    }
    displayQuestion();
});

document.getElementById("prevButton").addEventListener("click", function () {
    let checkboxes = document.getElementsByClassName("checkbox");
    let isChecked = false;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
        }
    }
    // nextButton.disabled = !isChecked;
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }
    displayQuestion();
});


document.addEventListener('DOMContentLoaded', displayQuestion);
