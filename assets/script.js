document.addEventListener('DOMContentLoaded',function() {

var currentQuestion = 0;
var timerCount = 30;
var timerEl = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var questionText = document.querySelector("#question-text");
var userOptions = document.querySelector("#options");
var userScore = document.querySelector("#user-score");

//object array for questions and answers
var questions = [
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: ["if i = 4","if i = 4 then","if i === 4","if (i === 4)"],
        answer: "if (i === 4)"
    },
    {
        question: "How would you write an IF statement NOT equal to 4?",
        choices: ["if ( i > 4)","if (i != 4)","if (i >= 4)","if i =! 4"],
        answer: "if (i != 4)"
    },
    {
        question: "How can you add a comment in JavaScipt?",
        choices: ["//Comment here","!--Comment here--","~Comment here","(Comment here)"],
        answer: "//Comment here"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["userName","v userName","var userName","variable userName"],
        answer: "var userName"
    }

];

//Start page and start button
function startQuiz() {

    startTimer();
    displayQuestion();
};
//submit event listener to check startQuiz
//document.getElementById('#quiz-form').addEventListener('click', startQuiz);

//function for Timer
function startTimer() {
   var timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);

};

//function to display question
let currentChoice = [];

function displayQuestion(){
    startButton.style.visibility = 'hidden';
    questionText.innerHTML = questions[currentQuestion].question;
    currentChoice = questions[currentQuestion].choices;
    let choiceList = "";
    for ( i = 0; i < currentChoice.length; i++) {
        choiceList += "<button type='button' id='btn'>" + currentChoice[i] + "</button>";   
    }
    userOptions.innerHTML = choiceList;
    console.log(choiceList);
    
    //function and Event listener to check Answer
    document.querySelectorAll("#btn").forEach(function(button) {button.addEventListener("click", function(event){
 
            var selectedAnswer = event.target.textContent;
            var correctAnswer = questions[currentQuestion].answer;
            if (currentChoice.includes(selectedAnswer)) {
                if (selectedAnswer === correctAnswer){
                    if (currentQuestion <= questions.length) {
                        currentQuestion++;
                        console.log("Answer is correct: ", selectedAnswer);
                        if (currentQuestion === questions.length) {
                            return alert("Quiz complete, last answer was " + selectedAnswer);
                            
                        }else{ 
                            displayQuestion();
                        }  
                    }
                }else {
                    return alert("Try again");
                }
            }
        console.log("Q index is:", currentQuestion);
    });
    });
    
};

//Score screen and submit box for initials

startButton.addEventListener("click", startQuiz);

});