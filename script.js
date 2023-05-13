const rockWeapon = document.querySelector(".rockWeapon");
const paperWeapon = document.querySelector(".paperWeapon");
const scissorsWeapon = document.querySelector(".scissorsWeapon");

const playerScoreDom = document.querySelector(".playerScore");
const computerScoreDom = document.querySelector(".computerScore");
const roundWinner = document.querySelector(".roundWinner");
const winnerDeclaration = document.querySelector(".winner");
const winerDeclarationDiv = document.querySelector(".winnerDeclaration");

const playerWeaponDisplayer = document.querySelector(".playerWeaponDisplayer");
const computerWeaponDisplayer = document.querySelector(
  ".computerWeaponDisplayer"
);
const restart = document.querySelector(".restart");

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
  const setPlayerWeapon = () => {
    playerWeaponDisplayer.textContent = `Player (${event.target.dataset.weapon})`;
    computerWeaponDisplayer.textContent = `computer (${computer})`;
  };
  if (player == "rock" && computer == "scissors") {
    playerScore++;
    roundWinner.textContent = "Player Won the Round";
    setPlayerWeapon();
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
    setPlayerWeapon();
  } else if (player == "paper" && computer == "rock") {
    roundWinner.textContent = "Player Won the Round";
    playerScore++;
    setPlayerWeapon();
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
    setPlayerWeapon();
  } else if (player == "scissors" && computer == "paper") {
    roundWinner.textContent = "Player Won the Round";
    playerScore++;
    setPlayerWeapon();
  } else if ((player = "paper" && computer == "scissors")) {
    computerScore++;
    roundWinner.textContent = "Computer Won the Round";
    setPlayerWeapon();
  } else {
    roundWinner.textContent = "Tie";
    setPlayerWeapon();
  }
//   console.log(playerWeaponDisplayer.textContent);
//   console.log(computerWeaponDisplayer.textContent);
  console.log("Player ", playerScore);
  console.log("Computer ", computerScore);
  playerScoreDom.textContent = playerScore;
  computerScoreDom.textContent = computerScore;
  if (playerScore === 5) {
    winnerDeclaration.textContent = "Player Won the Game";
    winerDeclarationDiv.style.display = "flex";
  }
  if (computerScore === 5) {
    winnerDeclaration.textContent = "Computer Won the Game";
    winerDeclarationDiv.style.display = "flex";
  }
};
const resetAll = () => {
  window.location.reload();
};
rockWeapon.addEventListener("click", game);
paperWeapon.addEventListener("click", game);
scissorsWeapon.addEventListener("click", game);
restart.addEventListener("click", resetAll);
