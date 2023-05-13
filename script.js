const rockWeapon = document.querySelector(".rockWeapon");
const paperWeapon = document.querySelector(".paperWeapon");
const scissorsWeapon = document.querySelector(".scissorsWeapon");

const playerScoreDom = document.querySelector(".playerScore");
const computerScoreDom = document.querySelector(".computerScore");
const roundWinner = document.querySelector(".roundWinner");
const winnerDeclaration = document.querySelector(".winner");

roundWinner.textContent = "";
winnerDeclaration.textContent = "";
let playerScore = 0;
let computerScore = 0;

const computerSelectionData = ["rock", "paper", "scissors"];
const computerSelection = (max) => {
  let number = Math.floor(Math.random() * max);
  return computerSelectionData[number];
};
const game = (event) => {
  console.log(event.target.dataset.weapon);
  console.log(computerSelection(3));
  let player = event.target.dataset.weapon;
  let computer = computerSelection(3);
 
  if (player == "rock" && computer == "scissors") {
    playerScore++;
    roundWinner.textContent = "Player Won the Round";
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
  } else if (player == "paper" && computer == "rock") {
    roundWinner.textContent = "Player Won the Round";
    playerScore++;
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
  } else if (player == "scissors" && computer == "paper") {
    roundWinner.textContent = "Player Won the Round";
    playerScore++;
  } else if ((player = "paper" && computer == "scissors")) {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
  } else {
    roundWinner.textContent = "Tie";
  }
  console.log("Player ",playerScore)
  console.log("Computer ",computerScore)
  playerScoreDom.textContent = playerScore;
  computerScoreDom.textContent = computerScore;
  if (playerScore === 5) {
    winnerDeclaration.textContent = "Player Won the Game";
  }
  if (computerScore === 5) {
    winnerDeclaration.textContent = "Computer Won the Game";
  }
};

rockWeapon.addEventListener("click", game);
paperWeapon.addEventListener("click", game);
scissorsWeapon.addEventListener("click", game);
