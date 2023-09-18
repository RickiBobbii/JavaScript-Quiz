document.addEventListener('DOMContentLoaded',function() {

var currentQuestion = 0;
var timer;
var timerCount = 30;
var timerEl = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen");
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
//function for Timer
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            alert("Time is up!");
        }
    }, 1000);
};
//Score screen and submit box for initials
function displayScore () {
    var playerName = localStorage.getItem("name");
    var playerScore = localStorage.getItem("score");
    userScore.textContent = playerName + " = " + playerScore + " points      ";
    userScore.classList.add('userScore');
}
//function to display question
let currentChoice = [];

function displayQuestion(){
    //startButton.style.visibility = 'hidden';
    startScreen.style.display = 'none';
    questionText.innerHTML = questions[currentQuestion].question;
    currentChoice = questions[currentQuestion].choices;
    let choiceList = "";
    for ( i = 0; i < currentChoice.length; i++) {
        choiceList += "<button type='button' id='btn'>" + currentChoice[i] + "</button>";   
    }
    userOptions.innerHTML = choiceList;
    console.log(currentChoice);
    
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
                            //Display score
                            questionText.style.display = 'none';
                            userOptions.style.display = 'none';
                            document.querySelector("#timer").style.display = 'none';
                            console.log(timerCount);
                            userScore.textContent = "You finished with a Time and Score of " + timerCount + "!";
                            console.log(timerCount);
                            clearInterval(timer);
                            // Submit button test
                            var form = document.createElement('form');
                            userScore.appendChild(form);
                            var nameInput = document.createElement('input');
                            nameInput.setAttribute('type', 'text');
                            nameInput.id = 'name';
                            form.appendChild(nameInput);
                            var submitBtn = document.createElement('button');
                            submitBtn.setAttribute('type', 'submit');
                            submitBtn.id = 'submit-name';
                            submitBtn.innerHTML = 'Submit Initials';
                            form.appendChild(submitBtn);
                            //add Event listener for Initials submit 
                            submitBtn.addEventListener("click", function(event) {
                                event.preventDefault();
                                var name = nameInput.value;
                                var score = timerCount.valueOf();
                                //add if no input
                                if(name === "") {
                                    alert("Error, no input typed in");   
                                }
                                localStorage.setItem("name", name);
                                localStorage.setItem("score", score);
                                displayScore();
                                //display scores
                                var names = [];
                                //trying to add names to list
                                if (localStorage.getItem('names')){
                                    names = JSON.parse(localStorage.getItem('names'));
                                }
                                names.push(name + " = " + score + " points");
                                //
                                localStorage.setItem('names', JSON.stringify(names));
                                var namesList = document.createElement("ul");
                                namesList.innerHTML = '<h3>Score Board</h3>';
                                for (i= 0; i < names.length; i++) {
                                    var nameLength = document.createElement("li");
                                    var nameText = document.createTextNode(names[i]);
                                    nameLength.appendChild(nameText);
                                    namesList.appendChild(nameLength);   
                                }
                                document.body.appendChild(namesList);
                                //style score board
                                namesList.setAttribute('style', 'color:white;text-shadow: 0 0 10px;' )
                                //retry button test
                                var retryBtn = document.createElement('button');
                                retryBtn.setAttribute('type', 'submit');
                                retryBtn.id = 'submit-name';
                                //add style to retryBtn
                                retryBtn.classList.add('retryBtn');
                                retryBtn.innerHTML = 'Retry?';
                                userScore.appendChild(retryBtn);
                                //link to begining page
                                retryBtn.addEventListener("click", function() {
                                    window.location.reload();
                                });
                            }) 
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



startButton.addEventListener("click", startQuiz);

});