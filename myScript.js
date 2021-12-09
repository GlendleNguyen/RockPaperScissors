let playerWins = 0
let computerWins = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    const choice = ["water", "fire", "grass"]
    // returns a random choice for the computer
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice) {
    let computerChoice = computerPlay()

    switch (playerChoice) {
        case 'water':
            if (computerChoice === 'grass') {
                console.log('You lose! Grass beats water')
                break
            }
            else if (computerChoice === 'fire') {
                console.log('You win! Water beats fire')
                break
            }
            else {
                console.log('Draw!')
                break
            }

        case 'fire':
            if (computerChoice === 'water') {
                console.log('You lose! Water beats fire')
                break
            }
            else if (computerChoice === 'grass') {
                console.log('You win! Fire beats grass')
                break
            }
            else {
                console.log('Draw!')
                break
            }

        case 'grass':
            if (computerChoice === 'fire') {
                console.log('You lose! Fire beats grass')
                break
            }
            else if (computerChoice === 'water') {
                console.log('You win! Grass beats water')
                break
            }
            else {
                console.log('Draw!')
                break
            }
    }
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})
