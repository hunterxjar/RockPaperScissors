/*
ROCK PAPER SCISSORS
1 - CREATE FUNCTION TO GENERATE COMPUTER CHOICE
2 - CREATE FUNCTION TO GET CHOICE FROM PLAYER
3 - CREATE ROUND FUNCTION TO COMPARE BOTH CHOICES
4 - CREATE SCORE VARIABLES
5 - MAKE THE ROUND FUNCTION INCREASE THE SCORE
6 - CREATE FUNCTION TO PLAY 5 ROUNDS
7 - DECLARE THE BIG WINNER
*/


//Generates Computer choice between rock paper and scissors,
//
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return computerChoice = "rock";
    } else if (randomNum === 2) {
        return computerChoice = "paper";
    } else if (randomNum === 3) {
        return computerChoice = "scissors";
    }

}


//create importants variabel
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let humanChoice;


/*
This is the round play function. My first attempt checked for a tie, then checked for every other
possible option individually in several if else statements.
*/

function getHumanChoice() {
    humanChoice = prompt("Let's play rock paper scissors!! Type your decision:\n-Rock\n-Paper\n-Scissors").toLowerCase();
}  
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Convert to lowercase for consistency
    if (humanChoice === computerChoice) {
      console.log(`You chose ${humanChoice}, and the computer chose ${computerChoice}. It's a tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`${humanChoice} defeated by ${computerChoice}. You lose!`);
      return computerScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You chose ${humanChoice} beat ${computerChoice}.\nIt's an absolute W for you!`);
      return humanScore++;
    } else {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
  };

  
// display choices between human and computer
function checkChoice(){
    return console.log(`human choice ${humanChoice} and computer choice ${computerChoice}`)
};
/*
This is the function that runs the game 5 times and keeps track of the score.
*/
function playgame() {
    for (let round = 1; round <= 5; round++ ){
        console.log(`Round ${round}`);
        console.log(`Your Score ${humanScore}, Computer Score ${computerScore}`);
        getHumanChoice();
        getComputerChoice();
        console.log(`The computer chooses: ${computerChoice}\nyour chooses: ${humanChoice}`);
        playRound(humanChoice, computerChoice)
        if (round === 5) {SVGAElement
          if (humanScore === computerScore) {
              console.log(`You won ${humanScore} time(s)`);
              console.log(`The computer won ${computerScore} time(s)`);
              console.log("It's a tie!")
          } else if (humanScore > computerScore) {
              console.log(`You won ${humanScore} time(s)`);
              console.log(`The computer won ${computerScore} time(s)`);
              console.log("You win!")
          } else {
              console.log(`You won ${humanScore} time(s)`);
              console.log(`The computer won ${computerScore} time(s)`);
              console.log("You lose :(");
          }

          
          
        }
    }
}

playgame();