const buttons = document.querySelectorAll('.btn');
const resultText = document.querySelector('.explanation');
const scoreText = document.querySelector('.score');
const gameText = document.querySelector('h2');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function generateRoundWinner(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'You tied!';
                case 'paper':
                    return 'You lost! Paper beats Rock';
                case 'scissors':
                    return 'You won! Rock beats Scissors';
            }
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return 'You won! Paper beats Rock';
                case 'paper':
                    return 'You tied!';
                case 'scissors':
                    return 'You lost! Scissors beats Paper';
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return 'You lost! Rock beats Scissors';
                case 'paper':
                    return 'You won! Scissors beats Paper';
                case 'scissors':
                    return 'You tied!';
            }
    }
}

function updateScore() {
    if (resultText.textContent.includes("You won!")) {
        playerScore++;
        scoreText.textContent = `The current score is ${playerScore} to ${computerScore}`;
    } else if (resultText.textContent.includes("You lost!")) {
        computerScore++;
        scoreText.textContent = `The current score is ${playerScore} to ${computerScore}`;
    } else {
        scoreText.textContent = `The current score is ${playerScore} to ${computerScore}`;
    }
}

function generateGameWinner() {
    if (playerScore == 5) {
        gameText.textContent = `You won the game against the computer!`;
    } else if (computerScore == 5) {
        gameText.textContent = `You lost the game against the computer!`;
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