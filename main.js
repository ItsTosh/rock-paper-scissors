// VARIABLES
const buttons = document.querySelectorAll("button")
const outcome = document.querySelector(".outcome");
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// function to play a round

function getComputerChoice() {
  let randNum = Math.random();

  if (randNum < 0.33) {
    return "Rock";
  } else if (randNum >= 0.33 && randNum < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const scoreMessage = document.querySelector(".score-message");
  const scoreHuman = document.querySelector(".score-num-human");
  const scoreComp = document.querySelector(".score-num-computer");

  if (
    playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"
  ) {

    playerScore++;
    outcome.textContent = "Winner: Player";
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`
    updateEmoji(playerSelection, computerSelection);
    scoreHuman.textContent = `Human: ${playerScore}`;

  } else if (
    playerSelection === "paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock" 
    || playerSelection === "rock" && computerSelection === "paper"
    ) {
  
      computerScore++;
      outcome.textContent = "Winner: Computer";
      scoreMessage.textContent = `${computerSelection} beats ${playerSelection}`
      updateEmoji(playerSelection, computerSelection);
      scoreComp.textContent = `Computer: ${computerScore}`;

    } else if (playerSelection === computerSelection) {

      outcome.textContent = "It's a tie! No points given";
      scoreMessage.textContent = `${playerSelection} is the same as ${computerSelection}`
      updateEmoji(playerSelection, computerSelection);

    } 
}

function updateEmoji(playerSelection, computerChoice) {
  const emojiComp = document.querySelector(".emoji-computer");
  const emojiHuman = document.querySelector(".emoji-human")

  if (computerChoice === "rock") {
    emojiComp.textContent = "✊";
  } else if (computerChoice === "paper") {
    emojiComp.textContent = "🤚";
  } else if (computerChoice === "scissors") {
    emojiComp.textContent = "✌️"
  }

  if (playerSelection === "rock") {
    emojiHuman.textContent = "✊";
  } else if (playerSelection === "paper") {
    emojiHuman.textContent = "🤚";
  } else if (playerSelection === "scissors") {
    emojiHuman.textContent = "✌️"
  }  
}

function playGame() { 

    buttons.forEach(
      (button) => {
        const buttonID = button.id;

        button.addEventListener("click", () => {
          const computerChoice = getComputerChoice().toLowerCase();
          
          if (playerScore === 5 && computerScore < playerScore) {
            outcome.textContent = "Final Winner: Player";
            button.setAttribute("disable", "");
          } else if (computerScore === 5 && playerScore < computerScore) {
            outcome.textContent = "Final Winner: Computer";
            button.setAttribute("disable", ""); 
          } else {
            playRound(buttonID, computerChoice);
          }
        })
      }
    )
  }


playGame()