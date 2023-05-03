
// Function that allows computer to choose rock, paper, or scissors
function getComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber){
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
}
const allButtons = document.querySelectorAll('button');
const addSpan = document.getElementById('winner');
/*Assigns an event listener to every button.
Plays a round declaring a winner onclick.*/

function playOnButton(){
    let playerScore = 0;
    let computerScore = 0;

    allButtons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent.toLowerCase();
            //console.log(playerSelection);

            const computerSelection = getComputerChoice().toLowerCase();
            //console.log('Computers choice:', computerSelection);

            const winner= playRound(playerSelection, computerSelection);
            
        
            //adds winner into a div
            addSpan.textContent = winner;

            if (winner === 'You win!') {
                playerScore++;
                document.getElementById('counterPlayer').textContent = playerScore;
              } else if (winner === 'You lose!') {
                computerScore++;
                document.getElementById('counterComputer').textContent = computerScore;
              }

        });
    });
}


//Function that plays one round of the game.
function playRound(playerSelection, computerSelection) {
    const outcomes = {
        rock: {
            rock: 'Tie!',
            paper: 'You lose!',
            scissors: 'You win!',
        },
        paper: {
            rock: 'You win!',
            paper: 'Tie!',
            scissors: 'You lose!',
        },
        scissors:{
            rock: 'You lose!',
            paper: 'You win!',
            scissors: 'Tie!'
        }

    };
    return outcomes[playerSelection][computerSelection];
}



//Function to play the game 5 times.
/*function updateScore() {
    const addPlayerWin = document.getElementById('counterPlayer')
    const addComputerWin = document.getElementById('counterComputer')

    let playerScore = 0
    let computerScore = 0

    result = playRound()
    switch (result) {
        case 'You win!':
            playerScore += 1
            break;
        case 'You lose!':
            computerScore += 1
            break;
        case 'Tie!':
            break;
    }


   console.log(playerScore);
    



}
*/


playOnButton();
//updateScore();