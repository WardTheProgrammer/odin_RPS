let playerScore = 0
let computerScore = 0

const btn1 = document.getElementById("Rock");
const btn2 = document.getElementById("Paper");
const btn3 = document.getElementById("Scissors");



function getComputerChoice() {
    randumNum = Math.floor(Math.random()*3)
    switch (randumNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "rock";
    }
}



function generateWinner(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("It is a tie!");
        return null;
    } else if (
        playerSelection == "rock" 
        && computerSelection === "scissors" 
        || playerSelection === "paper" 
        && computerSelection === "rock" 
        || playerSelection === "scissors" 
        && computerSelection === "paper"
        ) {
        console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else if (
        playerSelection == "rock" 
        && computerSelection === "paper" 
        || playerSelection === "paper" 
        && computerSelection === "scissors" 
        || playerSelection === "scissors" 
        && computerSelection === "rock"
    ) {
        console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    } else {
        console.log("Something went wrong!");
    }
}

function game() {
    playerScore = 0
    computerScore = 0
    while (playerScore < 5 && computerScore < 5) {
        btn1.addEventListener("click", () => generateWinner("rock"));
        btn2.addEventListener("click", () => generateWinner("paper"));
        btn3.addEventListener("click", () => generateWinner("scissors"));
    }
    if (playerScore == 5) {
        console.log("You win the game!");
        console.log(`Your points: ${playerScore}`);
        console.log(`The computers points: ${computerScore}`);
    } else if (computerScore == 5) {
        console.log("You lose the game!");
        console.log(`Your points: ${playerScore}`);
        console.log(`The computers points: ${computerScore}`);
    }
}
game();
