function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
      return computerChoice = "rock";
  } else if (randomNum === 2) {
      return computerChoice = "paper";
  } else if (randomNum === 3) {
      return computerChoice = "scissors";
  }
};

//
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let humanChoice;


function playRound(myChoice, computerChoice) {
   // Convert to lowercase for consistency
const resultText = document.querySelector('#resultText');
const comChoice = document.querySelector('#comChoice');
const myScore = document.querySelector('#myScore');
const comScore = document.querySelector('#comScore')

  if (myChoice === computerChoice) {
    resultText.textContent = `You chose ${myChoice}, and the computer chose ${computerChoice}. It's a tie!`;
    comChoice.textContent = `computer choice is : ${computerChoice}`;
    comScore.textContent = `Computer score = ${computerScore}`;
    myScore.textContent = `Your score = ${humanScore}`;
  } else if (
    (myChoice === "rock" && computerChoice === "paper") ||
    (myChoice === "paper" && computerChoice === "scissors") ||
    (myChoice === "scissors" && computerChoice === "rock")
  ) {
    resultText.textContent = `${myChoice} defeated by ${computerChoice}. You lose!`;
    comChoice.textContent = `computer choice is : ${computerChoice}`;
    computerScore++;
    comScore.textContent = `Computer score = ${computerScore}`;
    myScore.textContent = `Your score = ${humanScore}`;
    winOrLose();
  } else if (
    (myChoice === "rock" && computerChoice === "scissors") ||
    (myChoice === "paper" && computerChoice === "rock") ||
    (myChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = `You chose ${myChoice} beat ${computerChoice}.\nIt's an absolute W for you!`;
    comChoice.textContent = `computer choice is : ${computerChoice}`;
    humanScore++;
    comScore.textContent = `Computer score = ${computerScore}`;
    myScore.textContent = `Your score = ${humanScore}`;
    winOrLose();
  } else {
    alert("Invalid choice. Please choose rock, paper, or scissors.");
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
  }
  
};

const chRock = document.querySelector('#rock');
chRock.addEventListener('click', ()=>{
  myChoice = "rock";
  getComputerChoice();
  playRound(myChoice, computerChoice)
});

const chPaper = document.querySelector('#paper');
chPaper.addEventListener('click',() => {
  myChoice = "paper";
  getComputerChoice();
  playRound(myChoice, computerChoice)
} );

const chScissors = document.querySelector('#scissors');
chScissors.addEventListener('click', ()=>{
  myChoice = "scissors";
  getComputerChoice();
  playRound(myChoice, computerChoice);
});

function winOrLose() {
  console.log("Checking win or lose condition...");
  
  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      resultText.textContent = "You lose!!";
    } else if (humanScore === 5) {
      resultText.textContent = "Congratulations, you are the winner!!";
    }

    // Log to confirm if the buttons are being selected
    const buttons = document.querySelectorAll('#buttonContainer button');
    console.log("Disabling buttons:", buttons);

    buttons.forEach(button => {
     button.disabled = true;
});
  }
  
}