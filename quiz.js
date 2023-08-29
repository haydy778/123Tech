//variables
var questionNumber = 0;
var correctAnswerCount = 0;
var highScore = 0;

//array for questions
const questions = [
  "How many pieces are there on a chess board in total?",
  "Which piece can only move diagonally?",
  "Which two pieces do you use to 'castle'?",
  "Which piece can a pawn not promote into?",
  "Which piece is used for en passant?",
  "What is the least number of moves needed for checkmate?",
  "What opening starts with c4?",
  "What is the first move of the Bird's Opening?",
  "How long was the longest known chess game?",
  "Which computer won the first game against a GM?"
]

//array for options given for each question
const options = [
  ["16", "32", "28", "64"],
  ["Pawn", "Rook", "Bishop", "Queen"],
  ["King & Rook", "Queen & Rook", "Two Rooks", "King & Queen"],
  ["King", "Queen", "Knight", "Bishop"],
  ["Queen", "Bishop", "King", "Pawn"],
  ["3", "2", "4", "6"],
  ["English Opening", "Scandinavian Opening", "French Defense", "Vienna Gambit"],
  ["c3", "d3", "f4", "e4"],
  ["307 moves", "171 moves", "269 moves", "195 moves"],
  ["Super Knight", "Deep Blue", "Still Knight", "Deep Thought"],

]

//array for answers
const answers = [
  2,
  3,
  1,
  1,
  4,
  2,
  1,
  3,
  3,
  4
]


function next() {
  //when next is pressed, hide results and next button, and set colour of labels to blue
  document.getElementById("result").style.display = "none";
  document.getElementById("checkAnswer").style.display = "block";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementsByClassName("answers")[0].style.color = "#073B4C";
  document.getElementsByClassName("answers")[1].style.color = "#073B4C";
  document.getElementsByClassName("answers")[2].style.color = "#073B4C";
  document.getElementsByClassName("answers")[3].style.color = "#073B4C";

  if (questionNumber < questions.length - 1) {
    //when the question list in not finished, increase question number by 1
    //show next question and next set of options
    questionNumber++;
    document.getElementById("questions").innerHTML = questions[questionNumber];
    document.getElementById("option1").innerHTML = options[questionNumber][0];
    document.getElementById("option2").innerHTML = options[questionNumber][1];
    document.getElementById("option3").innerHTML = options[questionNumber][2];
    document.getElementById("option4").innerHTML = options[questionNumber][3];

  } else {
    //if questions are finished hide labels, inputs and buttons expect overall result and restart button
    document.getElementById("questions").style.display = "none";
    document.getElementById("nextQuestion").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("choose1").style.display = "none";
    document.getElementById("choose2").style.display = "none";
    document.getElementById("choose3").style.display = "none";
    document.getElementById("choose4").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result2").style.display = "block";
    //calculate how many answers were correct
    document.getElementById("result").innerHTML = "You got " + correctAnswerCount + " answers correct, out of " + questions.length + " questions.";
    //show high score
    document.getElementById("result2").innerHTML = "Your high score is " + localStorage.getItem("highScore") + "."
    document.getElementById("checkAnswer").style.display = "none";
    //if current score is bigger than high score, save new score as high score
    if (correctAnswerCount > Number(localStorage.getItem("highScore"))) {
      localStorage.setItem("highScore", correctAnswerCount)
    }
    document.getElementById("restart").style.display = "block";

  }

}

var givenAnswer = 0;

function check() {
  var validAnswer = true
  //set givenAnswer based on input chosen
  if (document.getElementById("choose1").checked == true) {
    givenAnswer = 1;
  } else if (document.getElementById("choose2").checked == true) {
    givenAnswer = 2;
  } else if (document.getElementById("choose3").checked == true) {
    givenAnswer = 3;
  } else if (document.getElementById("choose4").checked == true) {
    givenAnswer = 4;
  } else {
    //if answer not chosen, ask for one
    validAnswer = false;
    alert("Please select an answer");
  }


  if (givenAnswer == answers[questionNumber]) {
    //if given answer is correct, increase correct answer count by 1
    correctAnswerCount++;
    //show correct message and show next button

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Correct!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";
    //change chosen answer color to green
    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "green";

  } else if (validAnswer) {
    //if wrong answer was chosen, change current answer color to red
    document.getElementsByClassName("answers")[answers[questionNumber] - 1].style.color = "green";
    //change correct answer to green
    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "red";
    //show incorrect message and show next button
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Incorrect!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";

  }
}
