const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const ScoreText = document.querySelector('#score');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0


let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js>",
        choice4: "<script file='xxx.js'>",
        answer: 3
        
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    },
    {
        question: "What year was JavaScript launches?",
        choice1: "1996",
        choice2: "1995",
        choice3: "1994",
        choice4: "none of the above",
        answer: 2 
    }
]
