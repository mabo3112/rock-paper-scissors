
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons");
const score = document.querySelector("#score");
const choices = document.querySelector("#choices");
choices.textContent = "Click one of the buttons to start!";
score.textContent = humanScore + " : " + computerScore;



buttons.addEventListener("click", function(e) {
    //console.log(e.target.id);
    if(humanScore == 5 || computerScore == 5) {
        gameEnd();
    } else {
        playRound(e.target.id);
    }
     
    
    
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
    
}

function gameEnd(){
    console.log("ende")
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
/*
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
