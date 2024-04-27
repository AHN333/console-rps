const scoreboard = document.createElement("div");
const container = document.querySelector("#container");
container.appendChild(scoreboard);
let humanScore = 0, 
computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "Rock";
    } else if (choice == 1){
        return "Paper";
    } else if (choice == 2){
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            scoreboard.textContent = "Tie!";
        } else if (computerChoice == "paper"){
            scoreboard.textContent = "You lose! Paper beats Rock!";
            computerScore++;
        } else if (computerChoice == "scissors"){
            scoreboard.textContent = "You win! Rock beats Scissors!";
            humanScore++;
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            scoreboard.textContent = "You win! Paper beats Rock!";
            humanScore++;
        } else if (computerChoice == "paper"){
            scoreboard.textContent = "Tie!";
        } else if (computerChoice == "scissors"){
            scoreboard.textContent = "You lose! Scissors beats Paper!";
            computerScore++;
        }
    } else if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            scoreboard.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (computerChoice == "paper"){
            scoreboard.textContent = "You Win! Scissors beats Paper!";
            humanScore++;
        } else if (computerChoice == "scissors"){
            scoreboard.textContent = "Tie!";
        }
    }

}

function checkScore(){
    if (humanScore == 5){
        scoreboard.textContent = "Game Over! You Win! Final Score: " + humanScore + " - " + computerScore;
    } else if (computerScore == 5){
        scoreboard.textContent = "Game Over! You lose! Final Score: " + humanScore + " - " + computerScore;
    }
}

function playGame(){
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function() {
        const computerSelection = getComputerChoice().toLowerCase();
        playRound("rock", computerSelection);
        checkScore();
    });
    paper.addEventListener("click", function() {
        const computerSelection = getComputerChoice().toLowerCase();
        playRound("paper", computerSelection);
        checkScore();
    });
    scissors.addEventListener("click", function() {
        const computerSelection = getComputerChoice().toLowerCase();
        playRound("scissors", computerSelection);
        checkScore();
    });
  
}


playGame();