
const startButton = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('nextButton');

let currentQuestionIndex = 0;
let score = 0;


const questions = [
    {
        question: "What is the past tense of Go?(Aller)",
        choices: ["gone", "went", "goed", "allé"],
        correctAnswer: "went"
    },

    {
        question: "What us the past tense of have?(Avoir) ",
        choices: ["haved","hud","haven","had"],
        correctAnswer: "had"
    },

    {
        question: "What is the past tense of bring?",
        choices: ["brung","brang","brought","bring"],
        correctAnswer: "brought"
    },
];

function startQuiz() {
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(li);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
     
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        quizContainer.innerHTML = `Vous avez obtenu ${score} points sur ${questions.length} !`;
    }
}

startButton.addEventListener('click', startQuiz);




