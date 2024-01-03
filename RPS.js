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
    };
};

const playerSelection = "Rock";
let computerSelection = getComputerChoice();

function generateWinner(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        computerSelection = getComputerChoice();
        generateWinner(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log(`You lose! ${computerSelection.toLowerCase()} beats ${playerSelection}`);
    } else {
        console.log("Something went wrong!");
    };
};

generateWinner(playerSelection, computerSelection);
