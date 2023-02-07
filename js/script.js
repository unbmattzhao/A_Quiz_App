
// Use an array to store All the questions and options and answers 
const questionArray = 
[
    {
        Question: "Commonly used data types DO NOT include:",
        option: [
                "1. strings",    
                "2. booleans",
                "3. alerts",    
                "4. numbers"
                ],
        answer:  "3. alerts"
    },

    {
    Question: "The condition in an if / else statement is enclosed within _____",
    option: [
            "1. quotes",    
            "2. curly brackets",
            "3. parentheses",    
            "4. square brackets"
            ],
    answer:  "3. parentheses"
    },

    {
        Question: "Arrays in JavaScript can be used to store___.",
        option: [
                "1. numbers and strings",    
                "2. other Arrays",
                "3. booleans",    
                "4. all of the above"
                ],
        answer: "4. all of the above"
    },

    {
        Question: "String values must be enclosed within ____ when being assigned to variables.",
        option: [
                "1. commas",    
                "2. curly brackets",
                "3. quotes",    
                "4. parentheses"
                ],                 
        answer: "3. quotes"
    },
    
    {
        Question: " A very useful tool used during development and debugging for printing content to the debugger is:",
        option: [
                "1. JavaScript",    
                "2. terminal / bash",
                "3. for loops",    
                "4. console.log"
                ],
        answer:   "4. console.log"
    }
]

// get all the related elements
var viewScore = document.querySelector('.viewScore');
var timer = document.querySelector('#timer');
var firstPage = document.querySelector('.firstPage');
var startBtn = document.querySelector('#startBtn');
var qaArea = document.querySelector('#qaArea');
var qaResultEL = document.querySelector('#qaResult');
var hrEl = document.querySelector('.hr');
var correctEl = document.querySelector('.correct');
var incorrectEl = document.querySelector('.incorrect')
var questionEl = document.querySelector('.question');
var answerBtnEl = document.querySelector('.answerBtn');
var scoreSubmissionArea = document.querySelector('#scoreSubmissionArea');
var goBackArea = document.querySelector('.goBackArea');
var optionBtn0 = document.querySelector('#optionBtn0');
var optionBtn1 = document.querySelector('#optionBtn1');
var optionBtn2 = document.querySelector('#optionBtn2');
var optionBtn3 = document.querySelector('#optionBtn3');
var i = 0;
var score = 0;



// Show first page only when loading this app, hide other pages.
qaArea.setAttribute('style', 'display: none');
scoreSubmissionArea.setAttribute('style', 'display: none');
goBackArea.setAttribute('style', 'display: none');

// Hide the first page, show the questions from the first one when clicking the Start Quiz button

startBtn.addEventListener('click', () => {
    firstPage.setAttribute('style', 'display: none');
    qaArea.removeAttribute('style');
    hrEl.setAttribute('style', 'display: none');
    correctEl.setAttribute('style', 'display: none');
    incorrectEl.setAttribute('style', 'display: none');
    timer.innerText = 'Time: 75';

    setTime();

}
);

function showNextQuestion() {  
    if(i<questionArray.length) {
        i++;
        showQuestion();
    }
    else{
        ""
    };
}
function showQuestion() {
    for(var i=0; i<questionArray.length; i++){
    questionEl.innerText = questionArray[i].Question;
    optionBtn0.innerText = questionArray[i].option[0];
    optionBtn1.innerText = questionArray[i].option[1];
    optionBtn2.innerText = questionArray[i].option[2];
    optionBtn3.innerText = questionArray[i].option[3];
}  
};

showQuestion();

answerBtnEl.addEventListener('click', showNextQuestion);

function backToQuiz(){
    location.reload();
}

function calcScore(e){
    if(e.innerHTML===questionArray[i].answer && score<questionArray.length)
    {score= score+1}
    else{}
    setTimeout(showNextQuestion(),300);
}




// i ++;

// showNextQuestion();


// question.innerText = (
//     function question() {
//         for (let i = 0; i < questionArray.length; i++){
//             questionArray.question;
//         }
// console.log(questionArray.question);

// });

// set timer 75' 

var timeLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // return result
      result();
    }

  }, 1000);
}