function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
  if (document.querySelector('button').textContent === 'rock'){
    return 'rock';
  } else if (document.querySelector('button').textContent === 'paper'){
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return `You Win! Rock beats ${computerSelection}`;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return `You Win! Paper beats ${computerSelection}`;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return `You Win! Scissors beats ${computerSelection}`;
    }
  }
}

function updateRound(resultText){
  const scoreText = `Player : ${playerScore} | Computer : ${computerScore}`;
  const roundText = `Round : ${round}`;
  result.textContent = `${resultText} \n ${scoreText} \n ${roundText}`;

  if (playerScore === 5){
    result.textContent += " " + "Congratulations! You killin' it!!";
  } 
  else if (computerScore === 5){
    result.textContent += " " + "You Lose against Computer lol! Better Luck Next Time!";
  }
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

const scoreboard = document.getElementById('scoreboard')
const result = document.createElement('div');
scoreboard.appendChild(result);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const resultText = playRound(playerSelection, computerSelection);
    if(resultText.includes('You Win')){
      playerScore++;
    }else if(resultText.includes('You Lose')){
      computerScore++;
    }
    round++;
    updateRound(resultText);
  })
});


/*

we want player and comp score, round;

so set 3 var,
set playerScore and compScore and round

const playerScore = 0;
const compScore = 0;
const round = 0;

IF player win THEN
  result.textContent = 'You win';
  playerScore++;
ElSE comp win THEN 
  result.textContent = 'You Lose';
  compScore++;

  create new function, return that to result;

from resultText, we got player and comp selection,
so for 
  round

  who win







PROGRAM rps-ui
  Create 3 button
  Assign rock, paper, scissors on each button

  Create random computer generator choices

  Create user choices function
    how to connect button and user input?
    IF user click rps button THEN
    RETURN choice

  Create playRound function
    Compare comp and user input
    RETURN output




PROGRAM getComputerChoice
    Generate 3 Choices (Rock, Paper, Scissors);
    Generate random index number;
    Make the random index number decide which in the array wil be choosen;
    RETURN
END

PROGRAM getPlayerChoice
    Prompt player to choose either rock, paper, scissors
    IF player type wrong choices THEN
        return "Please choose either rock, paper, scissors"
    ELSE
        RETURN choice;
END

PROGRAM playRound
    Get playerSelection and computerSelection input;
    IF player === computer THEN
        Return "tie";
    ELSE
        IF player choose rock THEN
            IF computer choose paper THEN
                Print Lose;


        IF player choose scissors THEN
            IF computer choose rock THEN
                Print Lose;


        IF player choose paper THEN
            IF computer choose scissors THEN
                Print Lose;
        ELSE 
            Print Win;
END

PROGRAM game
    5 TIMES DO all from start

END


  const input = prompt(
    "Choose between rock, paper, and scissors",
    ""
  ).toLowerCase();
  if (input == "rock" || input == "paper" || input == "scissors") {
    return input;
  }
  console.error("Invalid Input!");
*/
