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
    let humanScore = 0, 
    computerScore = 0;
    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            console.log("Tie!");
        } else if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors!")
            humanScore++;
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (computerChoice == "paper"){
            console.log("Tie!");
        } else if (computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper!")
            computerScore++;
        }
    } else if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice == "paper"){
            console.log("You Win! Scissors beats Paper!");
            humanScore++;
        } else if (computerChoice == "scissors"){
            console.log("Tie!")
        }
    }
}


function playGame(){
    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(humanSelection, computerSelection);
    }
    console.log("Human to Computer score:" + humanScore + "-" + computerScore)
}