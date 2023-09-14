document.addEventListener('DOMContentLoaded',function() {

var timer;
var timerCount;
var timerEl = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");


//object array for questions and answers
var questions = [
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    },
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    },
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    },
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    },
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Booleans","Alerts","Numbers","Strings"],
        answer: "Alerts"
    }

];

//Start page and start button


function startQuiz(){
    timerCount = 30;
    startTimer();
};
//submit event listener to check startQuiz
//document.getElementById('#quiz-form').addEventListener('click', startQuiz);

//function for Timer
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);

};

//function to display question
//function displayQuestion(){};

//function to check answer
//function checkAnswer(){};
// submit event listener to check answer
//document.getElementById('#quiz-form').addEventListener('click', checkAnswer);


//Score screen and submit box for initials

startButton.addEventListener("click", startQuiz);

});