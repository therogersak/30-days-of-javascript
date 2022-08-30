const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    a: "Cental Style Sheets",
    b: "Cascading Style Sheet",
    c: "Cars SUVs Sails",
    d: "Cascading Style Sheets",
    correct: "d",
  },

  {
    question: "What does HTML stand for?",
    a: "Hyper Text Transfer Protocol",
    b: "Hypertext Markup Language",
    c: "Hyperloop Machin Learning",
    d: "Helicopters Modules Pro",
    correct: "b",
  },

  {
    question: "What year was Javascript launched?",
    a: "1995",
    b: "1999",
    c: "1997",
    d: "1994",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.getElementsByClassName("answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};


const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

loadQuiz();

submit.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct)score++;
        currentQuiz++;
        if(currentQuiz < quizData.length) loadQuiz();
        else{
            quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} questions correctly </h2> <button onClick="history.go()>Play Again</button>`

        }
    }
})