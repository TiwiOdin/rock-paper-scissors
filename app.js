let userPoints = 0
let computerPoints = 0

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', function(){pre_playRound("rock")});
paperBtn.addEventListener('click', function(){pre_playRound("paper")});
scissorsBtn.addEventListener('click', function(){pre_playRound("scissor")});

const results = document.querySelector('.results');

function pre_playRound(userChoice) {
    let computerSelection = getComputerChoice();
    playRound(userChoice, computerSelection);
}

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
    
    const p1 = document.createElement('p');
    p1.textContent = `User Selection: ${playerSelection}`;

    const p2 = document.createElement('p');
    p2.textContent = `Computer Selection: ${computerSelection}`

    const p3 = document.createElement('p');
    p3.textContent = textRound;

    const p4 = document.createElement('p');
    p4.textContent = `User Points: ${userPoints} Computer Points: ${computerPoints}`;

    results.appendChild(p1);
    results.appendChild(p2);
    results.appendChild(p3);
    results.appendChild(p4);

    if(computerPoints == 5 || userPoints == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        finishGame();
    }
}


function finishGame() {

    const mSecret = document.createElement('h2');

    if(userPoints > computerPoints) {
        mSecret.textContent = `Player Wins with ${userPoints} points`
    } else if(userPoints < computerPoints)  {
        mSecret.textContent = `Computer Wins with ${computerPoints} points`
    } else { // draw
        mSecret.textContent = `Tie with ${userPoints} points`
    }

    results.appendChild(mSecret);
}

// game()

// When you don’t need a branch anymore it can be deleted using git branch -d <branch_name> 
// if the branch has already been merged into main, or with git branch -D <branch_name> if it hasn’t. 
// You will usually want to delete branches when you’re done with them, 
// otherwise they can pile up and make it more difficult to find the branch you’re looking for when you need it.

// Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore.
// Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it
// from the remote repo on GitHub with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!