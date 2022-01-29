const computerPlay = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let rng = Math.floor(Math.random() * choices.length);
  return choices[rng];
};

function displayResult(res, pscore, cscore) {
  const div = document.getElementById('results');
  if (pscore === 5) {
    div.innerText = 'Congrats You won the game!!';
    playerScore = 0;
    cpuScore = 0;
  } else if (cscore === 5) {
    div.innerText = 'Sorry You lost the game...';
    playerScore = 0;
    cpuScore = 0;
  } else {
    div.innerText = `${res} Current Score: You ${pscore}, cpu ${cscore}`;
  }
}

function playRound() {
  const playerMove = this.id;
  const computerSelection = computerPlay();
  const gameChoices = `You chose ${playerMove} and the computer chose ${computerSelection}. `;
  let result = '';

  if (playerMove === computerSelection) {
    result = "It's a draw!";
  }
  switch (playerMove) {
    case 'rock':
      if (computerSelection === 'paper') {
        result = 'You Lose! Paper beats Rock';
        cpuScore++;
      } else if (computerSelection === 'scissors') {
        result = 'You Win! Rock beats Scissors';
        playerScore++;
      }
      break;
    case 'paper':
      if (computerSelection === 'rock') {
        result = 'You Win! Paper beats Rock';
        playerScore++;
      } else if (computerSelection === 'scissors') {
        result = 'You Lose! Scissors beats Paper';
        cpuScore++;
      }
      break;
    case 'scissors':
      if (computerSelection === 'paper') {
        result = 'You Win! Scissors beats Paper';
        playerScore++;
      } else if (computerSelection === 'rock') {
        result = 'You Lose! Rock beats Scissors';
        cpuScore++;
      }
      break;
    default:
      break;
  }
  displayResult(gameChoices + result, playerScore, cpuScore);
}

let playerScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', playRound);
});
