const choice = ["rock", "paper", "scissors"];

let user_score = 0;
let computer_score = 0;

const getComputerChoice = choice => {
  let randomChoice = Math.floor(Math.random() * choice.length);

  return choice[randomChoice];
}

const score_container = document.querySelector(".score-container");
const texto = document.querySelector(".texto");
const reset_btn = document.querySelector(".reset");

const buttons_container = document.querySelector(".buttons-container");
const buttons_game = document.querySelectorAll(".buttons-game");

const computer_score_span = document.querySelector(".computer-score-span");
const user_score_span = document.querySelector(".user-score-span");

const startGame = () => {

buttons_game.forEach(button => {
  button.addEventListener("click", e => {
    let userChoice = e.target.textContent.toLowerCase();

    if(userChoice === getComputerChoice(choice)) {
      texto.textContent = "EMPATE!";1
    }
    else if(userChoice === "rock" && getComputerChoice(choice) === "scissors") {
      user_score++;
      user_score_span.textContent = user_score;
      texto.textContent = "GANASTE!";
    }
    else if(userChoice === "paper" && getComputerChoice(choice) === "rock") {
      user_score++;
      user_score_span.textContent = user_score;
      texto.textContent = "GANASTE!";
    }
    else if(userChoice === "scissors" && getComputerChoice(choice) === "paper") {
      user_score++;
      user_score_span.textContent = user_score;
      texto.textContent = "GANASTE!";
    }
    else if(getComputerChoice(choice) === "rock" && userChoice === "scissors") {
      computer_score++;
      computer_score_span.textContent = computer_score;
      texto.textContent = "PERDISTE!! :(";
    }
    else if(getComputerChoice(choice) === "paper" && userChoice === "rock") {
      computer_score++;
      computer_score_span.textContent = computer_score;
      texto.textContent = "PERDISTE!! :(";
    }
    else if(getComputerChoice(choice) === "scissors" && userChoice === "paper") {
      computer_score++;
      computer_score_span.textContent = computer_score;
      texto.textContent = "PERDISTE!! :(";
    }
    endGame(buttons_game);
  })
})
}

const endGame = button => {
  button.forEach(btn => {
    if(user_score === 5) {
      btn.setAttribute("disabled", "");
      texto.textContent = "Ganador: Jugador!! 🧑"
      reset_btn.style.display = "block";
      reset_btn.style.background = "green";
    }
    else if(computer_score === 5) {
      btn.setAttribute("disabled", "");
      texto.textContent = "Ganador: Computadora!! 🤖"
      reset_btn.style.display = "block";
      reset_btn.style.background = "red";

    }
  })
}

const play_game = document.querySelector(".btn-game");
play_game.addEventListener("click", () => {
  score_container.style.display = "flex";
  buttons_container.style.display = "flex";
  play_game.style.display = "none";
  startGame();
});


reset_btn.addEventListener("click", () => window.location.reload());