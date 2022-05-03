// randomly assign "rock", "paper", or "scissors" to computer
let choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


let computerSelection = computerPlay();


// ask user to choose "rock", "paper", or "scissors"
function playerPlay() {
    let playerChoice = prompt("What do you choose? You only have three options.\n- rock\n- paper\n- scissors\n\nChoose wisely.");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

let playerSelection = playerPlay();

// console.log(playerSelection)



// a round is played
function playRound(player, computer) {

    alert(`So you chose ${playerSelection.toUpperCase()} and I choose ${computerSelection.toUpperCase()}...`);

    // in case of a tie
    if (computer === player) {
        // console.log("Humpf. This is a tie.")
        return "Tie. No winner."

        // computer wins if... 
    } else if (computer === "rock" && player === "scissors") {
        // console.log("That was an easy win...")
        return "Computer wins."

        // paper vs. scissors
    } else if (computer === "paper" && player === "rock") {
        // console.log("I did that on purpose.")
        return "Computer wins."

    } else if (computer === "scissors" && player === "paper") {
        // console.log("That was an easy win...")
        return "Computer wins."

    }
    else {
        return "Human wins."
    }
}


alert(playRound(playerSelection, computerSelection));

function game(numberOfGames) {
    
}