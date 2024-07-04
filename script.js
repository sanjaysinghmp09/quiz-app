const questions = [
    {
        question:"Which is larget animal in the world? " ,
        answer: [
            {text: "Shark", Correct: false} ,
            {text: "Blue Whale", Correct: true} ,
            {text: "Elephant", Correct: false} ,
            {text: "Giraffe", Correct: false} ,
        ]
    } , 

    {
        question: "What process do plants use to convert sunlight into energy?",
        answer: [
            {text: "Respiration", Correct: false},
            {text: "Photosynthesis", Correct: true},
            {text: "Digestion", Correct: false},
            {text: "Fermentation", Correct: false}
        ]
    } ,
    

    {
        question: "What is the chemical symbol for water?",
        answer: [
            {text: "W", Correct: false},
            {text: "H2O", Correct: true},
            {text: "HO", Correct: false},
            {text: "WA", Correct: false}
        ]
    } ,

    {
        question: "What is the process by which water vapor turns into liquid water?",
        answer: [
            {text: "Sublimation", Correct: false},
            {text: "Evaporation", Correct: false},
            {text: "Condensation", Correct: true},
            {text: "Precipitation", Correct: false}
        ]
    } ,

    {
        question: "What is the primary gas that makes up the Earth's atmosphere?",
        answer: [
            {text: "Oxygen", Correct: false},
            {text: "Nitrogen", Correct: true},
            {text: "Carbon Dioxide", Correct: false},
            {text: "Hydrogen", Correct: false}
        ]
    } ,

    {
        question: "What is the smallest unit of matter?",
        answer: [
            {text: "Atom", Correct: true},
            {text: "Molecule", Correct: false},
            {text: "Cell", Correct: false},
            {text: "Proton", Correct: false}
        ]
    } ,

    {
        question: "What causes the Earth's seasons?",
        answer: [
            {text: "Rotation", Correct: false},
            {text: "Revolution", Correct: true},
            {text: "Axial Tilt", Correct: false},
            {text: "Global Warming", Correct: false}
        ]
    } ,

    {
        question: "What type of energy does a moving car have?",
        answer: [
            {text: "Electrical Energy", Correct: false},
            {text: "Potential Energy", Correct: false},
            {text: "Kinetic Energy", Correct: true},
            {text: "Chemical Energy", Correct: false}
        ]
    } 
] ;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0 ;

function startQuiz() {
    currentQuestionIndex = 0 ;
    score = 0 ;
    nextButton.innerHTML = "Next" ;
    showQuestion();

}

function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question ;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.Correct) {
            button.dataset.Correct = answer.Correct;
        }
        button.addEventListener("click" , selectAnswer);
        
    });
}

function resetState() {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.Correct === "true" ;
    if (isCorrect) {
        selectedBtn.classList.add("Correct");
        score++ ; 

    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.Correct === "true"){
            button.classList.add("Correct");
        }
        button.disabled = "true" ;

    });

    nextButton.style.display = "block" ;

}

    function showScore () {
        resetState();
        questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++ ;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        }else {
            showScore () ; 
        }
    }

nextButton.addEventListener("click" , () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton() ;

    }else {
        startQuiz();
    }
} )
startQuiz();
