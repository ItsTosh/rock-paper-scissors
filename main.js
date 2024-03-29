function getComputerChoice() {
  let randNum = Math.random();
  
  if (randNum < 0.33) {
    return "Rock";
  } else if (randNum > 0.33 && randNum < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}