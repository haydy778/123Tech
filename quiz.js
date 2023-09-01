//variables
var questionNumber = 0;
var correctAnswerCount = 0;
var highScore = 0;
window.onload = function() {
  document.getElementById("nextQuestion").style.display = "none";

  document.getElementById("checkAnswer").style.display = "none";

  document.getElementById("restart").style.display = "none";
document.getElementById("choose1").style.display = "none";
document.getElementById("choose2").style.display = "none";
document.getElementById("choose3").style.display = "none";
document.getElementById("choose4").style.display = "none";
}
//array for questions
const questions = [
  "In which year was Southland Boys' High School founded?",
  "Who was the architect responsible for designing the school's original plans and also designed the First Church?",
  "What was the intended purpose of the top floor of the school, according to the original plans?",
  "When did the pupils suggest the idea of creating a room for a Museum at the school?",
  "Where is the Museum installed at the moment?",
  "What event prompted the installation of the Museum in the Band Room?",
  "How many All Blacks has the school produced?",
  "Who was the rector 2001?",
  "What tragic event is commemorated by two Honours Boards in the Museum?",
  "Where was Southland Boys High School located before it moved to it’s current location?"
]

//array for options given for each question
const options = [
  ["1867", "1881", "1905", "2006"],
  ["John T Mair", "Lynley Dear", "Geoffrey Cox", "David Strang"],
  ["Library", "Auditorium", "Gymnasium", "Museum"],
  ["1905", "1881", "2006", "1954"],
  ["The Band Room", "The Sports Pavillion", "Pearce Block", "Off site"],
  ["Closure of intermediate schools", "The school's 125th reunion ", "Introduction of new historical curriculum", "Architect's recommendation"],
  ["2", "45", "30", "22"],
  ["Mr Grant ", "Mr Pearce", "Mr Coe", "Mr Baldwin"],
  ["The closure of intermediate schools", "The school's 125th reunion", "The architect's retirement ", "Students killed in both World Wars"],
  ["Tweed Street", "Herbert Street", "Forth Street", "Layard Street"],

]

//array for answers
const answers = [
  2,
  1,
  4,
  1,
  3,
  2,
  4,
  4,
  4,
  3
]
function quizStart() {
  document.getElementById("choose1").style.display = "block";
  document.getElementById("choose2").style.display = "block";
  document.getElementById("choose3").style.display = "block";
  document.getElementById("choose4").style.display = "block";
  document.getElementById("option1").style.display = "block";
  document.getElementById("option2").style.display = "block";
  document.getElementById("option3").style.display = "block";
  document.getElementById("option4").style.display = "block";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("checkAnswer").style.display = "block";
  document.getElementById("start").style.display = "none";
  //show question 1 and options for question 1
  document.getElementById("questions").innerHTML = questions[0];
  document.getElementById("option1").innerHTML = options[0][0];
  document.getElementById("option2").innerHTML = options[0][1];
  document.getElementById("option3").innerHTML = options[0][2];
  document.getElementById("option4").innerHTML = options[0][3];
}

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

