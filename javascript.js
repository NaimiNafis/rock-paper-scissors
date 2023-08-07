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

const playerSelection = prompt("Choose between rock, paper, and scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));

/*
PROGRAM getComputerChoice
    Generate 3 Choices (Rock, Paper, Scissors);
    Generate random index number;
    Make the random index number decide which in the array wil be choosen;
    RETURN
END

PROGRAM playerSelection
    Prompt player to choose either rock, paper, scissors
    RETURN choice;
END

PROGRAM playRound
    Get playerSelection and computerSelection;
    Compare both selection;
    let say if player choose rock;
    IF computer choose rock THEN
        Print Tie;
    ELSEIF computer choose scissors THEN
        Print Lose;
    ELSE computer choose paper THEN
        Print Win;
END

PROGRAM game
    5 TIMES DO

    IF player === computer THEN
    Return "tie";

    IF player choose rock THEN
        ELSEIF computer choose paper THEN
            Print Lose;
        ELSE computer choose scissors THEN
            Print Win;

    IF player choose scissors THEN
        ELSEIF computer choose rock THEN
            Print Lose;
        ELSE computer choose paper THEN
            Print Win;

    IF player choose paper THEN
        ELSEIF computer choose scissors THEN
            Print Lose;
        ELSE computer choose rock THEN
            Print Win;
END


*/

/*
(get user input)
(compare with computer rand)
1.check if same

if player == rock
    if(comp == paper)
        return lose

if player == paper
    if(comp == scissors)
        return lose

if player == scissors
    if(comp == rock)
        return lose

return win     
*/
