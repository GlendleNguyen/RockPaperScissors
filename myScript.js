let playerWins = 0
let computerWins = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    const choice = ['water', 'fire', 'grass']
    // returns a random choice for the computer
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice) {
    let computerChoice = computerPlay()

    switch (playerChoice) {
        case 'water':
            if (computerChoice === 'grass') {
                computerWins += 1
                break
            }
            else if (computerChoice === 'fire') {
                playerWins += 1
                break
            }
            else {
                break
            }

        case 'fire':
            if (computerChoice === 'water') {
                computerWins += 1
                break
            }
            else if (computerChoice === 'grass') {
                playerWins += 1
                break
            }
            else {
                break
            }

        case 'grass':
            if (computerChoice === 'fire') {
                computerWins += 1
                break
            }
            else if (computerChoice === 'water') {
                playerWins += 1
                break
            }
            else {
                break
            }
    }
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
        console.log("player choice: " + button.value)
    })
})
