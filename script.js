
const gameChoices = ['Rock','rock', 'Paper', 'paper', 'scissors', 'Scissors', 'SCISSORS', 'PAPER', 'ROCK']

function getComputerSelection (){
    const choiceIndex = Math.floor(Math.random() * gameChoices.length);
    const computerSelection = gameChoices[choiceIndex];
    return computerSelection;
}

let playerChoice = "";
function getPlayerSelection (playerChoice = prompt("Please enter your choice")) {
    if (playerChoice != null) {
        let validChoice = false;
        for (let i = 0; i < gameChoices.length; i++){
            if (playerChoice === gameChoices[i]) {
                validChoice = true;
            }
        }
        if (validChoice) {
            return playerChoice;
        }         
    }
}

function rockPaperScissorsRound() {
    let computerPlay =getComputerSelection().toLowerCase();
    let playerPlay = getPlayerSelection().toLowerCase();
    let result = ''
    if (computerPlay === playerPlay) {
        result = 'Draw';
        
    }else if (computerPlay === 'paper' && playerPlay === 'scissors') {
        result = ' You win!, scissors beats paper';
    }else if (computerPlay === 'paper' && playerPlay === 'rock') {
        result = ' You Lose! paper beats rock';
    }else if (computerPlay === 'rock' && playerPlay === 'scissors') {
        result = ' You lose! rock beats scissors';
    }else if (computerPlay === 'rock' && playerPlay === 'paper') {
        result = ' You win! paper beats rock';
    }else if (computerPlay === 'scissors' && playerPlay === 'rock') {
        result = ' You win! rock beats scissors';
    }else  {
        result = ' You lose! scissors beat paper';
    }
       return result; 
}




console.log(rockPaperScissorsRound())