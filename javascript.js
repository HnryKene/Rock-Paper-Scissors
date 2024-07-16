function getHumanChoice() {
  let choice = prompt("Pick a move.\n rock, paper or scissors").toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
      console.log(`You picked ${choice}.`);
      return choice;
  } else {
      console.log("Invalid choice. Please pick rock, paper, or scissors.");
      return getHumanChoice();  // Prompt again if invalid choice
  }
}

function getComputerChoice() {
  const randomNumber = Math.random();
  let computerChoice = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }

  console.log(`Computer picked ${computerChoice}.`);
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      console.log(`It's a draw! Both picked ${humanChoice}.`);
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore++;
      console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
  } else {
      computerScore++;
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}


const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

