const Rock = document.querySelector(".Rock");
const Paper = document.querySelector(".Paper");
const Scissors = document.querySelector(".Scissors");
const resultsDiv = document.querySelector(".results");



function playGame() {
  // Define and set up necessary variables
  let humanScore = 0;
  let computerScore = 0;
  const resultsDiv = document.querySelector(".results");
  const Rock = document.querySelector(".Rock");
  const Paper = document.querySelector(".Paper");
  const Scissors = document.querySelector(".Scissors");

  // Function to disable the buttons when the game ends
  function disableButtons() {
      Rock.disabled = true;
      Paper.disabled = true;
      Scissors.disabled = true;
  }

  // Function to get the computer's choice
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
      return computerChoice;
  }

  // Function to play a round
  function playRound(humanChoice) {
      const computerChoice = getComputerChoice();

      if (humanChoice === computerChoice) {
          resultsDiv.textContent = `It's a draw! Both picked ${humanChoice}.`;
      } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
      ) {
          humanScore++;
          resultsDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
      } else {
          computerScore++;
          resultsDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
      }

      // Update the score
      resultsDiv.textContent += ` Score: Human ${humanScore} - Computer ${computerScore}`;

      // Check for a winner
      if (humanScore === 5) {
          resultsDiv.textContent = `You win the game! Final score: Human ${humanScore} - Computer ${computerScore}, Refresh Page to Play Again.`;
          disableButtons(); // Disable buttons to end the game
      } else if (computerScore === 5) {
          resultsDiv.textContent = `You lose the game. Final score: Human ${humanScore} - Computer ${computerScore}, Refresh Web-Page to Play Again.`;
          disableButtons(); // Disable buttons to end the game
      }
  }

  // Event listeners for each button
  Rock.addEventListener('click', () => playRound('rock'));
  Paper.addEventListener('click', () => playRound('paper'));
  Scissors.addEventListener('click', () => playRound('scissors'));
}

// Start the game
playGame();
