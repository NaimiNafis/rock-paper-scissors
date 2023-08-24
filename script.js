//Computer and Player Choice

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

let playerScore = 0;
let compScore = 0;
let round = 1;

const scoreboard = document.getElementById('scoreboard');

let decider = document.createElement('div');
decider.textContent = 'Choose Your Weapon';
scoreboard.appendChild(decider);

let description = document.createElement('div');
description.textContent = 'First to score 5 points wins the game';
scoreboard.appendChild(description);

let playerScoreText = document.createElement('div');
playerScoreText.textContent = `Player: ${compScore}`;
scoreboard.appendChild(playerScoreText);

let compScoreText = document.createElement('div');
compScoreText.textContent = `Computer: ${compScore}`;
scoreboard.appendChild(compScoreText);

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    decider.textContent = "It's a Tie!";
    description.textContent = `${playerSelection} ties with ${computerSelection}`
  }
  else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      decider.textContent = 'You Won!';
      description.textContent = `Rock beats ${computerSelection}`;
      playerScore++;
    } else {
      decider.textContent = 'You Lose!';
      description.textContent = `Rock is beaten by ${computerSelection}`;
      compScore++;
    }
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      decider.textContent = 'You Won!';
      description.textContent = `Paper beats ${computerSelection}`;
      playerScore++;
    } else {
      decider.textContent = 'You Lose!';
      description.textContent = `Paper is beaten by ${computerSelection}`;
      compScore++;
    }
  }
  else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      decider.textContent = 'You Won!';
      description.textContent = `Scissors beats ${computerSelection}`;
      playerScore++;
    } else {
      decider.textContent = 'You Lose!';
      description.textContent = `Scissors is beaten by ${computerSelection}`;
      compScore++;
    }
  }
  round++;
}

function updateScore() {
  if (decider.textContent === 'You Won!') {
    playerScore++;
  }
  else if (decider.textContent === 'You Lose!') {
    compScore++;
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

END
*/