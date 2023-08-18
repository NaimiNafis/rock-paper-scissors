function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You Lose! Paper beats Rock";
      }
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}
 
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', getPlayerChoice)
});

function getPlayerChoice() {
  if(document.querySelector('button') = 'rock'){return 'rock'}
  else if(document.querySelector('button') = 'paper'){return 'paper'}
  else{return 'scissors'};
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log(computerSelection);

/*
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
