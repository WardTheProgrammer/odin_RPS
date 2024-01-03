function getComputerChoice() {
    randumNum = Math.floor(Math.random()*3)
    switch (randumNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Rock";
    }
}

console.log(getComputerChoice())