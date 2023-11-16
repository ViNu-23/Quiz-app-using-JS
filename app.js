const questions = [
    {
      question: "Which is the national animal of India?",
      answer: [
        { text: "lion", correct: false },
        { text: "tiger", correct: true },
        { text: "elephant", correct: false },
        { text: "monkey", correct: false },
      ],
    },
    {
      question: "What is the capital city of France?",
      answer: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      question: "What is the largest mammal in the world?",
      answer: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      question: "Which is the largest ocean on Earth?",
      answer: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Southern Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
        question: "What is the capital city of France?",
        answer: [
          { text: "Paris", correct: true },
          { text: "London", correct: false },
          { text: "Berlin", correct: false },
          { text: "Rome", correct: false },
        ],
      },
      {
        question: "Which planet is known as the Red Planet?",
        answer: [
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false },
        ],
      },
      {
        question: "Who painted the Mona Lisa?",
        answer: [
          { text: "Pablo Picasso", correct: false },
          { text: "Leonardo da Vinci", correct: true },
          { text: "Vincent van Gogh", correct: false },
          { text: "Michelangelo", correct: false },
        ],
      },
      {
        question: "What is the currency of Japan?",
        answer: [
          { text: "Yuan", correct: false },
          { text: "Pound", correct: false },
          { text: "Yen", correct: true },
          { text: "Euro", correct: false },
        ],
      },
      {
        question: "What is the largest mammal in the world?",
        answer: [
          { text: "Elephant", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Giraffe", correct: false },
          { text: "Hippopotamus", correct: false },
        ],
      },
      {
        question: "In which year did World War II end?",
        answer: [
          { text: "1943", correct: false },
          { text: "1945", correct: true },
          { text: "1947", correct: false },
          { text: "1950", correct: false },
        ],
      },
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answer: [
          { text: "George Orwell", correct: false },
          { text: "J.K. Rowling", correct: false },
          { text: "Harper Lee", correct: true },
          { text: "Ernest Hemingway", correct: false },
        ],
      },
      {
        question: "What is the largest desert in the world?",
        answer: [
          { text: "Sahara Desert", correct: false },
          { text: "Arctic Desert", correct: true },
          { text: "Gobi Desert", correct: false },
          { text: "Karakum Desert", correct: false },
        ],
      },
      {
        question: "Who developed the theory of relativity?",
        answer: [
          { text: "Isaac Newton", correct: false },
          { text: "Albert Einstein", correct: true },
          { text: "Galileo Galilei", correct: false },
          { text: "Stephen Hawking", correct: false },
        ],
      },
      {
        question: "What is the smallest prime number?",
        answer: [
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false },
          { text: "5", correct: false },
        ],
      },
      {
        question: "Who painted 'Starry Night'?",
        answer: [
          { text: "Pablo Picasso", correct: false },
          { text: "Vincent van Gogh", correct: true },
          { text: "Claude Monet", correct: false },
          { text: "Salvador Dali", correct: false },
        ],
      },
      {
        question: "What is the capital of Japan?",
        answer: [
          { text: "Seoul", correct: false },
          { text: "Beijing", correct: false },
          { text: "Tokyo", correct: true },
          { text: "Osaka", correct: false },
        ],
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
          { text: "Osmium", correct: false },
          { text: "Oxygen", correct: true },
          { text: "Oganesson", correct: false },
          { text: "Opium", correct: false },
        ],
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        answer: [
          { text: "F. Scott Fitzgerald", correct: true },
          { text: "Jane Austen", correct: false },
          { text: "George Orwell", correct: false },
          { text: "Charles Dickens", correct: false },
        ],
      },
      {
        question: "What is the largest continent?",
        answer: [
          { text: "North America", correct: false },
          { text: "Asia", correct: true },
          { text: "Africa", correct: false },
          { text: "Europe", correct: false },
        ],
      },
      {
        question: "Who is known as the 'Father of Computer Science'?",
        answer: [
          { text: "Alan Turing", correct: true },
          { text: "Bill Gates", correct: false },
          { text: "Steve Jobs", correct: false },
          { text: "Charles Babbage", correct: false },
        ],
      },
      {
        question: "What is the currency of Brazil?",
        answer: [
          { text: "Peso", correct: false },
          { text: "Real", correct: true },
          { text: "Dollar", correct: false },
          { text: "Euro", correct: false },
        ],
      },
      {
        question: "Which is the smallest planet in our solar system?",
        answer: [
          { text: "Mercury", correct: true },
          { text: "Mars", correct: false },
          { text: "Venus", correct: false },
          { text: "Pluto", correct: false },
        ],
      },
      {
        question: "What is the capital of Australia?",
        answer: [
          { text: "Sydney", correct: false },
          { text: "Melbourne", correct: false },
          { text: "Canberra", correct: true },
          { text: "Brisbane", correct: false },
        ],
      },
  ];
  
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion();
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  
}
function showQuestion() {
    resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
  currentQuestion.answer.forEach((answer) => {
    const buttons = document.createElement("button");
    buttons.innerHTML=answer.text;
    buttons.classList.add('btn');
    answerButton .appendChild (buttons);
    if(answer.correct){
        buttons.dataset.correct=answer.correct;
    }
    buttons.addEventListener('click',selectAnswer)
  });
}
function resetState(){
nextButton.style.display='none';
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');

    }
    Array.from(answerButton.children).forEach(buttons=>{
        if(buttons.dataset.correct==='true'){
            buttons.classList.add('correct');
        }
        buttons.disabled=true;
    });
    nextButton.style.display='block';
}
function  showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();