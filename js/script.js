
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
        Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option: [
                "1. JavaScript",    
                "2. terminal / bash",
                "3. for loops",    
                "4. console.log"
                ],
        answer:   "4. console.log"
    }
];

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
var optionEl = document.querySelector('.options');  // ! 
var scoreSubmissionArea = document.querySelector('#scoreSubmissionArea');
var scoreNumberEl = document.querySelector('.scoreNumber');
var goBackArea = document.querySelector('.goBackArea');
var optionBtn0 = document.querySelector('#optionBtn0');
var optionBtn1 = document.querySelector('#optionBtn1');
var optionBtn2 = document.querySelector('#optionBtn2');
var optionBtn3 = document.querySelector('#optionBtn3');
var initialsEl = document.querySelector('#initials');
var HighScoreEl = document.querySelector('#HighScore');
var submitEl = document.querySelector('#submit');
var clearScoreEl = document.querySelector('.clearScore');
var i = 0;
var score = 0;
var highScoresInput = [];





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
    setTime() 
}
);


function clearQaResult() {
    qaResultEL.setAttribute('style', 'display: none')
};

optionEl.addEventListener('click', showNextQuestion);

function showNextQuestion(event) {  
    // ! One click only, this is important! 
    // TODO: Find a solution to accept one click only for one question
    // ! Can be solved if set the options to be radios
    // TODO: add sound effect for right and wrong answers
    var element = event.target; 
    if (element.matches(".answerBtn")) {   
        if(element.textContent===questionArray[i].answer)
        {score= score+1;
        hrEl.removeAttribute('style');
        correctEl.removeAttribute('style');
       
        }
        else{
            timeLeft = timeLeft - 15;
            hrEl.removeAttribute('style');
            incorrectEl.removeAttribute('style');
           
        }
            console.log(score);
           
        if(i<questionArray.length-1) {
            i++;      
            setTimeout(showQuestion, 500); 
        }
        else{
            qaArea.setAttribute('style', 'display: none');
            scoreSubmissionArea.removeAttribute('style');
            scoreNumberEl.innerText = score;                  
        };
        setTimeout(clearQaResult, 500)
        
    };   
    
   
};

function showQuestion() {   
    questionEl.innerText = questionArray[i].Question;
    optionBtn0.innerText = questionArray[i].option[0];
    optionBtn1.innerText = questionArray[i].option[1];
    optionBtn2.innerText = questionArray[i].option[2];
    optionBtn3.innerText = questionArray[i].option[3];    
};
showQuestion();


var timeLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;   
    timer.textContent = "Time: " + timeLeft;
    
    if(timeLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      qaArea.setAttribute('style', 'display: none');
      
      scoreSubmissionArea.removeAttribute('style');
      timer.textContent = "Time: 0";
      // return result
    }
  },
  1000);
};


submitEl.addEventListener('click', submitScoreData);

// use JSON to store and push more  
function submitScoreData(event) {
    event.preventDefault();
    let scoreInput = {
        initials: initialsEl.value,
        highScore: score
    }
    highScoresInput = JSON.parse(localStorage.getItem('scoreInput') || '[]');
    highScoresInput.push(scoreInput);

    localStorage.setItem('scoreInput', JSON.stringify(highScoresInput));

//  console.log(highScoresInput);
console.log(localStorage);
       
    scoreSubmissionArea.setAttribute('style', 'display: none');
    goBackArea.removeAttribute('style');
}

    // let initials = initialsEl.value;
    // localStorage.setItem('Initials', initials)
    // localStorage.setItem('highScore', score)
  
    // HighScoreEl.innerText ="1. " + initialsEl.value +" - "+ score
    // };

clearScoreEl.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
    HighScoreEl.innerText = "Score cleared!"
})


HighScoreEl.innerText ="1. " + initialsEl.value +" - "+ score



// function backToQuiz(){
//     location.reload();
// };

// 