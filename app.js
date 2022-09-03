let userPoints = 0
let computerPoints = 0

function getUserChoice() {
    let userChoice = prompt("Rock, Paper or Scissor").toLowerCase()
    if(userChoice != "rock" && userChoice != "paper" && userChoice != "scissor") {
        getUserChoice()
    }

    return userChoice
}

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random()*3 + 1)
    let computerChoice;
    if(numberChoice == 1) {
        computerChoice = "rock"
    } else if(numberChoice == 2) {
        computerChoice = "paper"
    } else if(numberChoice == 3) {
        computerChoice = "scissor"
    }

    return computerChoice
}

function textRoundFunction(state, playerSelection, computerSelection) { 
    let text
    if(state == 0) { // draw
        text = `Draw! ${playerSelection} is tied with ${computerSelection}`
    } else if(state == 1) { // win
        text = `You Win! ${playerSelection} beats ${computerSelection} `
    } else if(state == 2) { // lose
        text = `You Lose! ${computerSelection} beats ${playerSelection} `
    }

    return text
}

function playRound(playerSelection, computerSelection) {
    let textRound;

    if(playerSelection == computerSelection) {
        textRound = textRoundFunction(0, playerSelection, computerSelection)
    }else if((playerSelection == "rock" && computerSelection == "scissor") ||
       (playerSelection == "paper" && computerSelection == "rock") ||
       (playerSelection == "scissor" && computerSelection == "paper")) {
        userPoints++
        textRound = textRoundFunction(1, playerSelection, computerSelection)
    } else {
        computerPoints++
        textRound = textRoundFunction(2, playerSelection, computerSelection)
    }

    console.log(`User Selection: ${playerSelection}`)
    console.log(`Computer Selection: ${computerSelection}`)

    return textRound
}


function game() {
    for(let i=0; i < 5; i++) {
        const playerSelection = getUserChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log(`User Points: ${userPoints}`, `Computer Points: ${computerPoints}`)
        console.log("\n")
    }    

    if(userPoints > computerPoints) {
        console.log(`Player Wins with ${userPoints} points`) 
    } else if(userPoints < computerPoints)  {
        console.log(`Computer Wins with ${userPoints} points`) 
    } else { // draw
        console.log(`Tie with ${userPoints} points`)
    }
}

game()