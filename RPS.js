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



function generateWinner(i) {
    let playerSelection = prompt(`Round ${i+1}:  Rock, Paper, Scissors, Shoot:`);
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("It is a tie!");
        return generateWinner();
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    console.log(`You win the round! ${playerSelection.toLowerCase()} beats ${computerSelection}`);
    return true;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
    console.log(`You lose the round! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
    return false;
    } else {
        console.log("Something went wrong!");
        let playerSelection = prompt(`Round ${i+1}:  Rock, Paper, Scissors, Shoot:`);
        let computerSelection = getComputerChoice();
        return generateWinner();
    };
};

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let result = generateWinner(i);
        if (result === true) {
            playerScore += 1;
        } else if (result === false) {
            computerScore += 1;
        } else {
            console.log("Something went wrong!"); 
        };
    };
    if (playerScore > computerScore) {
        console.log("You win the game!");
        console.log(`Your points: ${playerScore}`);
        console.log(`The computers points: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
        console.log(`Your points: ${playerScore}`);
        console.log(`The computers points: ${computerScore}`);
    } else {
        console.log("Something went wrong!");
    };
};

game();
