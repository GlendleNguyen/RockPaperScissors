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
    let textoutput = ""

    switch (playerChoice) {
        case 'water':
            if (computerChoice === 'grass') {
                computerWins += 1
                textoutput += "Bot (grass) beats You (water)"
                break
            }
            else if (computerChoice === 'fire') {
                playerWins += 1
                textoutput += "You (water) beat Bot (fire)"
                break
            }
            else {
                textoutput += "It's a draw!"
                break
            }

        case 'fire':
            if (computerChoice === 'water') {
                computerWins += 1
                textoutput += "Bot (water) beats You (fire)"
                break
            }
            else if (computerChoice === 'grass') {
                playerWins += 1
                textoutput += "You (fire) beat Bot (grass)"
                break
            }
            else {
                textoutput += "It's a draw!"
                break
            }

        case 'grass':
            if (computerChoice === 'fire') {
                computerWins += 1
                textoutput += "Bot (fire) beats You (grass)"
                break
            }
            else if (computerChoice === 'water') {
                playerWins += 1
                textoutput += "You (grass) beat Bot (water)"
                break
            }
            else {
                textoutput += "It's a draw!"
                break
            }
    }
    document.getElementById('textbox').innerHTML = textoutput
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
        console.log("player choice: " + button.value)
    })
})
