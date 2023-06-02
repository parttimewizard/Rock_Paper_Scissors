
window.addEventListener('DOMContentLoaded', function(){


const gameChoices = ['Rock','rock', 'Paper', 'paper', 'scissors', 'Scissors', 'SCISSORS', 'PAPER', 'ROCK']

// get the elements "Buttons" from the HTML File and store them in the corresponding variables.

let PaperBtn = document.getElementById('Paper');
let RockBtn = document.getElementById('Rock');
let ScissorBtn = document.getElementById('Scissors');
let gameResult = document.getElementById('game_result');
let gameScore = document.getElementById('score');
let playerScr = document.getElementById('playerScore');
let computerScr = document.getElementById('computerScore');
let gameReset = document.getElementById('gameReset');

// Get the computer's selection from the set of possible choices (gameChoices table).

function getComputerSelection (){
    const choiceIndex = Math.floor(Math.random() * gameChoices.length);
    const computerSelection = gameChoices[choiceIndex];
    return computerSelection;
}



// Play a round of rock paper scissor from the computer and player selections.
let playerScore = 0;
let computerScore = 0;

function rockPaperScissorsRound(e) {
    let computerPlay =getComputerSelection().toLowerCase();
    let playerPlay = e.target.id.toLowerCase();
    let result = ''
    if (computerPlay === playerPlay) {
        result = 'Draw';
        
    }else if (computerPlay === 'paper' && playerPlay === 'scissors') {
        result = ' You win!, scissors beats paper';
        playerScore = playerScore + 1;
    }else if (computerPlay === 'paper' && playerPlay === 'rock') {
        result = ' You Lose! paper beats rock';
        computerScore = computerScore + 1;       
    }else if (computerPlay === 'rock' && playerPlay === 'scissors') {
        result = ' You lose! rock beats scissors';
        computerScore = computerScore + 1; 
    }else if (computerPlay === 'rock' && playerPlay === 'paper') {
        result = ' You win! paper beats rock';
        playerScore = playerScore + 1;
    }else if (computerPlay === 'scissors' && playerPlay === 'rock') {
        result = ' You win! rock beats scissors';
        playerScore = playerScore + 1;
    }else  {
        result = ' You lose! scissors beat paper';
        computerScore = computerScore + 1; 
    }
         
        console.log(playerPlay)
        console.log(computerPlay)
        return result; 
      
}

// listen to the player's selection (to the buttons clicks)


PaperBtn.addEventListener('click', gameStat)
RockBtn.addEventListener('click', gameStat)
ScissorBtn.addEventListener('click', gameStat)
let gamePlayed = 0;
function gameStat(e) {

    if (gamePlayed < 5) {

    
        gameResult.innerText = rockPaperScissorsRound(e);
        gamePlayed = gamePlayed + 1;
        gameScore.innerText = gamePlayed;
        playerScr.innerText = playerScore;
        computerScr.innerText = computerScore;

    } else {

        if (playerScore === computerScore) {
            gameResult.innerText = "Game Over!, the game is a draw!";
        } else if (playerScore > computerScore) {
            gameResult.innerText = "Game Over!, you won, " + playerScore + " to " + computerScore + " !";
        } else {
            gameResult.innerText = "Game Over!, The Computer won, " + computerScore + " to " + playerScore + " !";
        }
        
    }
}

gameReset.addEventListener('click', function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gamePlayed = 0;

    gameResult.innerText = "New Game!";
    gameScore.innerText = gamePlayed;
    playerScr.innerText = playerScore;
    computerScr.innerText = computerScore;
})




})