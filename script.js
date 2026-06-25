const buttons = document.querySelectorAll(".choice");

const roundResult = document.querySelector(".round-result");
const scoreDisplay = document.querySelector(".score");
const winnerDisplay = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  switch (Math.floor(3 * Math.random())) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
};

const playRound = function (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }
  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    winnerDisplay.textContent = "🎉 You won the game!";
  }

  if (computerScore === 5) {
    winnerDisplay.textContent = "💀 Computer won the game!";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.classList[1], getComputerChoice());
  });
});
