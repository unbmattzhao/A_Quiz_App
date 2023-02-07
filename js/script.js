
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
        Question: "String valuse must be enclosed within ____ when being assigned to variables.",
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
                "4. cosole.log"
                ],
        answer:   "4. cosole.log"
    }
]

// get all the related elements
var firstPage = document.querySelector('.firstPage');
var startBtn = document.querySelector('#startBtn');
var qaArea = document.querySelector('#qaArea');
var question = document.querySelector('.question');
var scoreSubmissionArea = document.querySelector('#scoreSubmissionArea');
var goBackArea = document.querySelector('.goBackArea');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');



// Show first page only when loading this app, hide other pages.
qaArea.setAttribute('style', 'display: none');
scoreSubmissionArea.setAttribute('style', 'display: none');
goBackArea.setAttribute('style', 'display: none');

// Show the first question when clicking the Start Quiz button

startBtn.addEventListener('click', () => {
    firstPage.setAttribute('style', 'display: none');
    qaArea.removeAttribute('style', 'display: none')
}
);

//! find out how to get value from an object inside an array
question.innerText = (
    () => {
        for (let i = 0; i < questionArray.length; i++){
            return questionArray[i][i];
        }

});