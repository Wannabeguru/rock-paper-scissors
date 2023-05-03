
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
allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        console.log(playerSelection);

        const computerSelection = getComputerChoice().toLowerCase();
        console.log('Computers choice:', computerSelection);

        const winner= playRound(playerSelection, computerSelection);
        
       
        //adds winner into a div
        addSpan.textContent = winner;

    });
});
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
/*function game() {
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 3 && computerScore < 3 ){
        const user_input = prompt('Choose from rock, paper, or scissors!')
        result = playRound(user_input, computerSelection)
        switch (result) {
            case 'You win!':
                playerScore += 1
                break;

            case 'You lose!':
                computerScore += 1
                break;
            
            case 'Tie!':
                continue;

        }
        
        

    }
    
    winner = playerScore === 3 ? 'Player wins!' : 'Computer Wins!'
    console.log(winner)
}*/
