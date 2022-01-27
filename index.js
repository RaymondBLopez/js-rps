const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * choices.length);
  return choices[rng];
};

const playRound = (playerSelection, computerSelection) => {
  let playerMove = playerSelection.toLowerCase();

  console.log(playerMove, computerSelection);

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
