let playerWins = 0
let computerWins = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    const choice = ['water', 'fire', 'grass']
    // returns a random choice for the computer
    let compchoice = choice[Math.floor(Math.random() * 3)]
    updateBotImage(compchoice)
    return compchoice
}

function playRound(playerChoice) {
    let computerChoice = computerPlay()
    let textoutput = ""
    let winner = ""

    switch (playerChoice) {
        case 'water':
            if (computerChoice === 'grass') {
                computerWins += 1
                winner += "bot"
                textoutput += "Bot (grass) beats You (water)"
                break
            }
            else if (computerChoice === 'fire') {
                playerWins += 1
                winner += "player"
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
                winner += "bot"
                textoutput += "Bot (water) beats You (fire)"
                break
            }
            else if (computerChoice === 'grass') {
                playerWins += 1
                winner += "player"
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
                winner += "bot"
                textoutput += "Bot (fire) beats You (grass)"
                break
            }
            else if (computerChoice === 'water') {
                playerWins += 1
                winner += "player"
                textoutput += "You (grass) beat Bot (water)"
                break
            }
            else {
                textoutput += "It's a draw!"
                break
            }
    }
    const para = document.createElement("p")
    const node = document.createTextNode(textoutput)
    para.appendChild(node)
    const element = document.getElementById("textbox")
    element.appendChild(para)

    updateDots(winner)

    return
}

function checkWinner() {
    if(playerWins >= 5) {
        let r = confirm("You win! Click ok to play again")
        if (r == true) {
            window.location.reload()
        }
    }
    if(computerWins >= 5) {
        let r = confirm("Bot wins! Click ok to play again")
        if (r == true) {
            window.location.reload()
        }
    }
    return
}

function updateDots(roundWinner){
    let targetDot = ""
    if(roundWinner === "player") {
        targetDot = targetDot + "player" + playerWins
    } 
    if(roundWinner === "bot") {
        targetDot = targetDot + "comp" + computerWins
    }
    document.getElementById(targetDot).style.backgroundColor = "green"
    return
}

function updatePlayerImage(type) {
    let source = "./images/" + type + "1" + ".png"
    console.log(source)
    document.getElementById("playerchoice").src=source
}

function updateBotImage(type) {
    let source = "./images/" + type + "1" + ".png"
    console.log(source)
    document.getElementById("compchoice").src=source
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        updatePlayerImage(button.value)
        playRound(button.value)
        checkWinner()
    })
})
