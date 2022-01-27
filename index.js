const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * choices.length);
  return choices[rng];
};

const playRound = (playerSelection, computerSelection) => {
  let playerMove = playerSelection.toLowerCase();

  if (playerMove === computerSelection) {
    return "It's a draw!";
  }

  switch (playerMove) {
    case "rock":
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
      }
      break;

    case "scissors":
      if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
      } else if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
      }
      break;

    default:
      break;
  }
};

const game = () => {
  let rounds = 5;
  let playerScore = 0,
    cpuScore = 0;

  let gameResult = "";

  for (let i = 0; i < rounds; i++) {
    let result = playRound(prompt("Choose!"), computerPlay());
    console.log(result);
    if (result.includes("Win")) {
      playerScore += 1;
    } else {
      cpuScore += 1;
    }
  }
  if (playerScore > cpuScore) {
    gameResult = "Congrats! You Win!";
  } else {
    gameResult = "Sorry, You Lose";
  }
  console.log(`You won ${playerScore} out of ${rounds}, ${gameResult}`);
};

game();
