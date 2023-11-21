# Quiz App Using JS
This is a simple quiz application built using HTML, CSS, and JavaScript. The app presents a series of questions with multiple-choice answers. Users can select an answer for each question, and the app provides feedback on whether the selected answer is correct or incorrect. After completing the quiz, the user's score is displayed.

<img width="200" alt="Screenshot 2023-11-21 180718" src="https://github.com/ViNu-23/Quiz-app-using-JS/assets/59360964/ba17521b-119c-4628-9d7d-ee033bbd4ff2">
<img width="200" alt="Screenshot 2023-11-21 180743" src="https://github.com/ViNu-23/Quiz-app-using-JS/assets/59360964/9593aea3-9888-45a1-9a8d-2a7f026a81cb">
<img width="200" alt="Screenshot 2023-11-21 180816" src="https://github.com/ViNu-23/Quiz-app-using-JS/assets/59360964/6942f848-67b3-400c-8706-eda48410633e">
<img width="200" alt="Screenshot 2023-11-21 181024" src="https://github.com/ViNu-23/Quiz-app-using-JS/assets/59360964/3dee7176-7454-400c-ab56-d5e52ba90bda">

# How to Use
Start Quiz: Upon opening the app, the user can start the quiz by clicking the "Start Quiz" button.

Answer Questions: For each question, the user can click on one of the provided multiple-choice answers. The selected answer will be highlighted, and feedback will be given on whether it is correct or incorrect.

Next Question: After selecting an answer, the user can click the "Next" button to move on to the next question.

End of Quiz: After completing all the questions, the user's total score is displayed, indicating the number of correct answers out of the total questions.

Play Again: The user has the option to play the quiz again by clicking the "Play Again" button.

# Code Structure
HTML: The structure of the quiz app is defined in HTML. Questions, answer choices, and buttons are organized within HTML elements.

CSS: Styling for the quiz app is implemented using CSS to enhance the visual appeal and user experience.

JavaScript: The logic and functionality of the quiz app are implemented in JavaScript. The script handles question generation, answer selection, scoring, and the flow of the quiz.

# Quiz Data
The quiz data is stored in a JavaScript array named questions. Each question object contains a question string and an array of answer choices, each with a text and a correctness indicator.

const questions = [
    // ... (list of question objects)
];

# Functions
startQuiz(): Initializes the quiz by setting up the first question and resetting the score.

showQuestion(): Displays the current question and its answer choices.

resetState(): Resets the state of the answer buttons and hides the "Next" button.

selectAnswer(e): Handles the selection of an answer, provides feedback, and updates the score.

showScore(): Displays the user's final score after completing the quiz.

handleNextButton(): Handles the click event for the "Next" button, moving to the next question or displaying the final score.

Event listeners are set up to respond to user interactions, such as selecting an answer or clicking the "Next" button.

# Future Enhancements
Add a timer for each question to make the quiz more challenging.
Include more diverse question types (e.g., true/false, matching).
Implement a user authentication system to track individual scores.
Improve the overall design and layout for a better user experience
