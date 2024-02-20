const winLost = document.querySelector(".win-lost");
const tracker = document.querySelector(".tracker");
const son = document.querySelector("#son");
const mi = document.querySelector("#mi");

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".me-s");
const compScorePara = document.querySelector(".bot-s");

const choices = document.querySelectorAll(".circle");

const drawGame = () => {
  winLost.innerHTML = "DRAW";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    winLost.innerHTML = "WON";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    winLost.innerHTML = "LOST";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    son.innerHTML = genCompChoice();
    mi.innerHTML = " - ";
    playGame(userChoice);
    console.log(genCompChoice());
  });
});
