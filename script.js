let playerScore = 0;
let compScore = 0;
let round = 1;

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const scoreboard = document.getElementById('scoreboard');
const playerScoreDisplay = document.createElement('div');
const compScoreDisplay = document.createElement('div');
const roundDisplay = document.createElement('div');
const decider = document.createElement('div');
const description = document.createElement('div');
const compImg = document.createElement('div');
const playerImg = document.createElement('div');

scoreboard.appendChild(decider);
scoreboard.appendChild(description);
scoreboard.appendChild(roundDisplay);
scoreboard.appendChild(playerImg);
playerImg.appendChild(playerScoreDisplay);
playerImg.appendChild(compScoreDisplay);

decider.classList.add('decider');
description.classList.add('description');
roundDisplay.classList.add('round');
playerImg.classList.add('playerImg');
playerScoreDisplay.classList.add('playerScoreDisplay');
compScoreDisplay.classList.add('compScoreDisplay');



decider.textContent = 'Choose Your Hand!';
description.textContent = 'First to score 5 points wins the game';
playerScoreDisplay.textContent = "Player: 0";
compScoreDisplay.textContent = "Computer: 0";
roundDisplay.textContent = "Round: 1";


function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

rock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Rock";
  playRound(playerSelection, computerSelection);
  updateScore();
});

paper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Paper";
  playRound(playerSelection, computerSelection);
  updateScore();
});

scissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Scissors";
  playRound(playerSelection, computerSelection);
  updateScore();
});

function updateScores() {
  playerScoreDisplay.textContent = "Player: "+ playerScore;
  compScoreDisplay.textContent = "Computer: "+ compScore;
}

function updateDeciderAndDescription(result, playerSelection, computerSelection) {
  decider.textContent = result;
  description.textContent = `${playerSelection} ${result === 'You Won!' ? 'beats' : 'is beaten by'} ${computerSelection}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    updateDeciderAndDescription("It's a Tie!", playerSelection, computerSelection);
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
           (playerSelection === "Paper" && computerSelection === "Rock") ||
           (playerSelection === "Scissors" && computerSelection === "Paper")) {
    updateDeciderAndDescription('You Won!', playerSelection, computerSelection);
    playerScore++;
  } else {
    updateDeciderAndDescription('You Lose!', playerSelection, computerSelection);
    compScore++;
  }
  
  updateScores();
  round++;
  roundDisplay.textContent = "Round: "+ round;
  
  if (playerScore === 5 || compScore === 5) {
    if (playerScore){
      alert('Player Win! Congratulations!');
      location.reload();
    }
    else if (compScore){
      alert('PLayer Lose! Better Luck Next Time!');
      location.reload();
    }
  }
}



/*

PROGRAM rps-ui

//Get playerSelection
  Create 3 button
    Assign rock, paper, scissors on each button
    IF rock button clicked THEN
    RETURN rock
    IF paper button clicked THEN
    RETURN paper
    IF scissors button clicked THEN
    RETURN scissors

//Get computerSelection
  Generate random choices
    Generate 3 Choices (Rock, Paper, Scissors);
    Generate random index number;
    Make the random index number decide which in the array wil be choosen;
    RETURN either rock, paper, scissors
  
//Compare both input playRound()
  IF playerSelection === computerSelection THEN
    tie

  IF rock button is clicked (which means 'rock' returned) THEN
    IF computerSelection === 'scissors' THEN
      Win
    ELSE IF computerSelection === 'paper' THEN
      Lose
  
  IF paper button is clicked (which means 'paper' returned) THEN
    IF computerSelection === 'rock' THEN
      Win
    ELSE IF computerSelection === 'scissors' THEN
      Lose

  IF scissors button is clicked (which means 'scissors' returned) THEN
    IF computerSelection === 'paper' THEN
      Win
    ELSE IF computerSelection === 'rock' THEN
      Lose

//In DOM scoreboard
Need 5 div
1. You Win! / You Lose! / It's a Tie!
2. Reason (exp : Rock is beaten by Paper / Rock ties with rock/ Rock beats scissors)
3. img that show playerSelection plus userScore
4. img that show computerSelection plus compScore

//still haven't done the image for each round

END
*/