const buttons = document.querySelectorAll('.btn');
const scoreCount = document.querySelector('.score');
const resultText = document.querySelector('.resultText');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randArray = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return randArray[randNum];
}

function generateRoundWinner(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'You tied this round! You both chose Rock';
                case 'paper':
                    return 'You lost this round! Paper beats Rock';
                case 'scissors':
                    return 'You won this round! Rock beats Scissors';
            }
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return 'You won this round! Paper beats Rock';
                case 'paper':
                    return 'You tied this round! You both chose Paper';
                case 'scissors':
                    return 'You lost this round! Scissors beats Paper';
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return 'You lost this round! Rock beats Scissors';
                case 'paper':
                    return 'You won this round! Scissors beats Paper';
                case 'scissors':
                    return 'You tied! You both chose Scissors';
            }
    }
}

function updateScore() {
    if (resultText.textContent.includes("You won this round!")) {
        playerScore++;
        scoreCount.textContent = `${playerScore} - ${computerScore}`;
    } else if (resultText.textContent.includes("You lost this round!")) {
        computerScore++;
        scoreCount.textContent = `${playerScore} - ${computerScore}`;
    } else {
        scoreCount.textContent = `${playerScore} - ${computerScore}`;
    }
}

function generateGameWinner() {
    if (playerScore == 5) {
        resultText.textContent = `You won the game against the computer!`;
    } else if (computerScore == 5) {
        resultText.textContent = `You lost the game against the computer!`;
    }
}

function game(event) {
    if (playerScore === 5 || computerScore === 5) return;
    let playerChoice = event.target.innerText.toLowerCase();
    let computerChoice = getComputerChoice();
    resultText.textContent = generateRoundWinner(playerChoice, computerChoice);
    updateScore();
    generateGameWinner();
}

buttons.forEach((btn) => {
    btn.addEventListener('click', game)
})
