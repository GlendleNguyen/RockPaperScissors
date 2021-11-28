function computerPlay() {
    const choice = ["rock", "paper", "scissors"]
    // returns a random choice for the computer
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    let outcome 

    switch(playerChoice) {
        case 'rock':
            if(computerSelection === 'paper') {
                outcome = 'lose'
                console.log("You Lose! Paper beats Rock")
                break
            } 
            else if (computerSelection === 'scissors') {
                outcome = 'win'
                console.log("You Win! Rock beats Scissors")
                break
            }
            else {
                outcome = 'draw'
                console.log("Draw!")
                break
            }
        case 'scissors':
            if(computerSelection === 'rock') {
                outcome = 'lose'
                console.log("You Lose! Rock beats Scissors")
                break
            } 
            else if (computerSelection === 'paper') {
                outcome = 'win'
                console.log("You Win! Scissors beats Paper")
                break
            }
            else {
                outcome = 'draw'
                console.log("Draw!")
                break
            }
        case 'paper':
            if(computerSelection === 'scissors') {
                outcome = 'lose'
                console.log("You Lose! Scissors beats Paper")
                break
            } 
            else if (computerSelection === 'rock') {
                outcome = 'win'
                console.log("You Win! Paper beats Rock")
                break
            }
            else {
                outcome = 'draw'
                console.log("Draw!")
                break
            }
        }
        return outcome
    }

    function game() {
        let playerWins = 0
        let computerWins = 0
        let playerChoice

        while(true) {
            playerChoice = window.prompt('Rock, Paper, or Scissors?', '');
            
            switch(playRound(playerChoice, computerPlay())) {
                case 'win':
                    playerWins++
                    break
                case 'lose':
                    computerWins++
                    break
            }
            if(playerWins === 5 || computerWins === 5) {
                break
            }
        }

        if(playerWins == 5) {
            console.log("Player wins!")
        } else {
            console.log("Computer wins!")
        }
    }
