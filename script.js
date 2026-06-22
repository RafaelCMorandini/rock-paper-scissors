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

const getHumanChoice = function () {
  return prompt("Jogue");
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = function (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game ended in a tie!");
  }
};

playGame();
