const choice = ["rock", "paper", "scissors"];

let user_score = 0;
let computer_score = 0;

const getComputerChoice = choice => {
  let randomChoice = Math.floor(Math.random() * choice.length);

  return choice[randomChoice];
}

// let computer_choice = getComputerChoice(choice);

const playRound = (userChoice, computerChoice) => {
  let user_lower = userChoice.toLowerCase();
  if(user_lower === computerChoice) {
    return "Tie";
  }
  else if(user_lower === "rock" && computerChoice ==="scissors") {
    user_score++;
    return "You win";
  }
  else if(user_lower === "paper" && computerChoice === "rock") {
    user_score++;
    return "You win";
  }
  else if(user_lower === "scissors" && computerChoice === "paper") {
    user_score++;
    return "You win";
  }
  else if(computerChoice === "rock" && user_lower === "scissors") {
    computer_score++;
    return "You lose! Rock beats Scissors";
  }
  else if(computerChoice === "paper" && user_lower === "rock") {
    computer_score++;
    return "You lose! Paper beats Rock";
  }
  else if(computerChoice === "scissors" && user_lower === "paper") {
    computer_score++;
    return "You lose! Scissors beats Paper";
  }
}

const game = () => {

  let result = "";

  for(let i = 1; i <= 5; i++) {
    let user_choice = prompt("rock, paper, scissors?");
    result = playRound(user_choice, getComputerChoice(choice));
    if(user_choice === getComputerChoice(choice)) {
      i--;
    }

    console.log(`${result} - ${user_score} - ${computer_score}`);

    if(user_score === 3) {
      reset();
      alert("Ganaste!! Presiona F5")
      return result;
    }
    else if(computer_score === 3) {
      reset();
      alert("Perdiste!! :( Presiona F5");
      return result;
    }
    else {
      i--;
    }

  }

  return result;
}

const reset = () => {
  user_score = 0;
  computer_score = 0;
  play_game.style.display = "none";
}

const play_game = document.querySelector(".btn-game");
play_game.addEventListener("click", game);