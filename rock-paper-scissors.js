let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("#score");
const choices = document.querySelector("#choices");
const restart = document.querySelector("#restart-section");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.createElement("button");
restartBtn.id = "restart-button"
restartBtn.textContent = "Restart";
choices.textContent = "Click one of the buttons to start!";
score.textContent = humanScore + " : " + computerScore;

startGame();

rockBtn.addEventListener("click", function(e) {
    if(humanScore == 5 || computerScore == 5) {
    } else {
       playRound("rock");
}})

paperBtn.addEventListener("click", function(e) {
    if(humanScore == 5 || computerScore == 5) {
    } else {
       playRound("paper");
}})

scissorsBtn.addEventListener("click", function(e) {
    if(humanScore == 5 || computerScore == 5) {
    } else {
       playRound("scissors");
}})

restartBtn.addEventListener("click", function(e) {
    restart.removeChild(restartBtn);
    startGame();
    
})




function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        choices.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! " + humanChoice + " loses against " + computerChoice);
        choices.textContent = "You lose! " + humanChoice + " loses against " + computerChoice;
        computerScore++;
    } else {
        choices.textContent = "it's a tie! " + humanChoice + " and " + computerChoice;
        console.log("it's a tie! " + humanChoice + " and " + computerChoice);
    }
    score.textContent = humanScore + " : " + computerScore;
    if(humanScore == 5 || computerScore == 5) {
        gameEnd();
    }
}

function gameEnd(){
    if(humanScore > computerScore) {
        choices.textContent = "You won! Congratulations";
    } else {
        choices.textContent = "You lost! Against a computer...."
    }
    restart.appendChild(restartBtn);
    console.log("end")
}



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return "rock";
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function startGame() {
    humanScore = 0;
    computerScore = 0;
    choices.textContent = "Click one of the buttons to start!";
    score.textContent = humanScore + " : " + computerScore;
}
/* Old version without UI :)
function getHumanChoice() {
    let humanChoice = prompt("Input rock, paper or scissors")
    if (humanChoice.toLowerCase() === "rock") {
        console.log("rock");
        return humanChoice;
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log("paper");
        return humanChoice;
    } else if (humanChoice.toLowerCase() === "scissors") {
        console.log("scissors")
        return humanChoice;
    } else {
        console.log("Input not valid! Please type 'rock', 'paper' or 'scissors'")
    }
    
} */




 /*function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" 
            || humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! " + humanChoice + " loses against " + computerChoice);
            computerScore++;
        } else {
            console.log("it's a tie! " + humanChoice + " and " + computerChoice);
        }
    } 

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("The game finished! The scores are:  \n human: " + humanScore + " and computer: " + computerScore)
    if(humanScore > computerScore) {
        console.log("You won the game. Congratulations!")
    } else if (humanScore < computerScore){
        console.log("You lost the game. pathetic...")
    } else {
        console.log("Its a tie! You wasted your time! sadge")
    }

}

playGame(); */
