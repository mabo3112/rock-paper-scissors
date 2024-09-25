
let humanScore = 0;
let computerScore = 0;

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
    
}

function playGame() {
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

playGame();
