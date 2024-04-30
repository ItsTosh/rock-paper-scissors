// VARIABLES
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;

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

function playRound() {  
  playerSelection = prompt("What will it be? Rock, Paper, or Scissors?", "").toLowerCase();
  computerSelection = getComputerChoice().toLowerCase()

  if (
    playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"
  ) {

    round++;
    playerScore++;
    console.log(`Player scored a point!\nPlayer: ${playerScore}\nComputer: ${computerScore}\nTie: ${tie}`)
    return `You win!`;

  } else if (
    playerSelection === "paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock" 
    || playerSelection === "rock" && computerSelection === "paper"
    ) {
      round++;
      computerScore++;
      console.log(`Computer scored a point!\nPlayer: ${playerScore}\nComputer: ${computerScore}\nTie: ${tie}`)
      return `You lose!`;

    } else if (playerSelection === computerSelection) {
      round++;
      tie++;
      console.log(`It's a tie!\nPlayer: ${playerScore}\nComputer: ${computerScore}\nTie: ${tie}`)
      return `It's a tie!`;
    } 
}