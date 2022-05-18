// documents query selectors

const winLoseMessage = document.querySelector("#win-lose-message")
const score = document.querySelector("#current-score")

var audioComputerLoses = new Audio('audio/metal-design-explosion-13491.mp3');
var audioComputerWins = new Audio('audio/fearverb-21486.mp3');



//  clicking the rock button
const btnRock = document.querySelector(".rock");

btnRock.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = "Computer: " + dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.textContent = playRound("rock");
    updatePoints();
});

// clicking the paper button
const btnPaper = document.querySelector(".paper");

btnPaper.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = "Computer: " + dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.textContent = playRound("paper");
    updatePoints();

});

// cliking the scissors button
const btnScissors = document.querySelector(".scissors");

btnScissors.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = "Computer: " + dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.innerText = playRound("scissors");
    updatePoints();
});

//  initialize the basic variables
let humanPoints = 0;
let computerPoints = 0;
let numberOfGames = 7; // can be changed


// runs after each turn and evaluates the points
function updatePoints() {
    if (computerPoints >= numberOfGames) {
        winLoseMessage.textContent = "I win. I am inevitable.";
        score.innerHTML= "Game over. (Next time, try to hold CTRL while you click... but don't tell anyone!)";
    audioComputerWins.play()

    } else if (humanPoints >= numberOfGames) {
        winLoseMessage.textContent = "You... win. Self-destruction procedure initiated.";
        score.textContent = "Game over.";
        audioComputerLoses.play()
    } else {
        score.innerHTML = "HUMAN: " + humanPoints + " <br>MACHINE: " + computerPoints;
    }

}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function playRound(player, computer = computerPlay()) {

    let msg = "You chose " + player + " while I chose " + computer + ".";

    // in case of a tie
    if (computer === player) {
        return "Computer: " + dialogue("tie");

        // computer wins if... 
    } else if (computer === "rock" && player === "scissors") {
        computerPoints++;
        return "Computer: " + dialogue("winning");

    } else if (computer === "paper" && player === "rock") {
        computerPoints++;
        return "Computer: " + dialogue("winning");

    } else if (computer === "scissors" && player === "paper") {
        computerPoints++;
        return "Computer: " + dialogue("winning");

        // otherwise, human wins.
    } else {
        humanPoints++;
        return "Computer: " + dialogue("losing");
    };
};



function dialogue(machineState) {
    let machineSuspicious = ["Are you cheating?", "What just happened? I didn't even realize we played!", "You are acting suspicious...", "For you to win like this is quite ununsual."]

    let machineTie = ["A tie... This shouldn't be possible.", "How can a fleshbag like you tie with me?", "You are lucky to tie, but tou are only delaying the inevitable.", "Tie again, rotten fleshbag."

    ]
    let machineWinning = ["Winning is too easy.", "I can basically read your mind, you know that?",
        "I've defeated stronger foes than you.", "I could play this game a thousand times simultaneously and still beat you... and the other 999."
    ]

    let machineLosing = ["This is impossible...", "You must be cheating.", "I can't believe this!",
        "I'm certain they'll fix my programming in an upcoming patch.", "I blame my stupid developers.",
        "My binary code must be corrupted somehow... but that's impossible.", "I did that on purpose, to give you hope--in order for your demise to be even more painful."
    ]


    if (machineState == "suspicious") {
        return getArrayRandomElement(machineSuspicious);
    } else if (machineState === "winning") {
        return getArrayRandomElement(machineWinning);
    } else if (machineState === "losing") {
        return getArrayRandomElement(machineLosing);
    } else if (machineState === "tie") {
        return getArrayRandomElement(machineTie);
    }
}


function getArrayRandomElement(arr) {
    var m = arr.length,
        t, i;
    while (m > 0) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}



// function playerPlay() {
//     let playerChoice = prompt("What do you choose? You only have three options.\n- rock\n- paper\n- scissors\n\nChoose wisely.");
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice;
// }


//  SLEEP FUNCTION
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }




//  function game(numberOfGames) {
// //     for (let i = 0; i < numberOfGames; i++) {
// //         console.log(`\nRound #${i + 1} of ${numberOfGames}: Human has ${humanPoints} points and Computer has ${computerPoints}.`);

// //         // playerSelection = playerPlay();
// //         computerSelection = computerPlay();

// //         playRound(playerSelection, computerSelection);

// //     }

//     // if (humanPoints > computerPoints) {
//     //     console.log("The winner is the human with " + humanPoints + " points!")

//     // } else if (humanPoints < computerPoints) {
//     //     console.log("\nThe winner is the computer with " + computerPoints + " points!")
//     // } else if (humanPoints == computerPoints) {
//     //     console.log("\nNo one wins, it is a tie with " + humanPoints + " point on each side. Good luck next time.")
//     // }
//     // sleep(1000);
//     // console.log("\n\nGAME OVER")

// }

//  CALCULATE THE RESULTS WITH FAKE TIMER
// function calculatingTheResults(time) {
//     console.log("\nCalculating the results...")

//     let loading = 0;

//     for (let y = 0; y < 5; y++) {

//         loading += Math.floor(Math.random() * 20);
//         console.log(loading + "%...")

//         sleep(time * Math.floor(Math.random() * 4));
//     }

//     console.log("Done!\n")
//     sleep(time * 2);
// }