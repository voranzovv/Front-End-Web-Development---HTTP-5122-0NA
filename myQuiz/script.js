//quiz app script
// explained with comments  for clarity

// Array of quiz questions, options, and correct answers
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Saturn",
        d: "Mars",
        correct: "b"
    },
    {
        question: "Which language is used for web apps?",
        a: "PHP",
        b: "Python",
        c: "JavaScript",
        d: "All of the above",
        correct: "d"        
    }
];

// Selecting HTML elements to manipulate
const quiz = document.getElementById('quiz');
// Select all answer radio buttons
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');   
const submitBtn = document.getElementById('submit');

// Initialize quiz state variables
let currentQuiz = 0;
let score = 0;
// Load the first quiz question
loadQuiz();

// Function to load the current quiz question and options
function loadQuiz() {
    // Clear previous selections
    deselectAnswers();
    // Get current quiz data
    const currentQuizData = quizData[currentQuiz];
    // Update question and options in the HTML
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
    // Function to clear selected answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
// Function to get the selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
// Event listener for submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});

