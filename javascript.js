
// Function that allows computer to choose rock, paper, or scissors
function getComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber){
            case 0:
                return 'Rock';
            case 1:
                return 'Paper';
            case 2:
                return 'Scissors'

        }

}

//Function that plays one round of the game.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    const outcomes = {
        rock: {
            rock: 'Tie!',
            paper: 'You lose! Paper beats rock!',
            scissors: 'You win! Scissors beats paper!',
        },
        paper: {
            rock: 'You win! Paper beats rock!',
            paper: 'Tie!',
            scissors: 'You win! Scissors beats paper!',
        },
        scissors:{
            rock: 'You lose! Rock beats scissors!',
            paper: 'You win! Scissors beats paper!',
            scissors: 'Tie!'
        }

    };

    return outcomes[playerSelection][computerSelection];
}

console.log(playRound('paper',getComputerChoice()))