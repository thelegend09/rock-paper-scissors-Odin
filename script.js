// documents query selectors
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const winLoseMessage = document.querySelector("#win-lose-message")
const score = document.querySelector("#current-score")
const btnRock = document.querySelector(".rock");

var audioComputerLoses = new Audio('audio/metal-design-explosion-13491.mp3');
var audioComputerWins = new Audio('audio/fearverb-21486.mp3');


//  when you click on the event listeners
btnRock.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.textContent = playRound("rock");
    updatePoints();
});

btnPaper.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.textContent = playRound("paper");
    updatePoints();

});

btnScissors.addEventListener("click", () => {
    if (window.event.ctrlKey) {
        humanPoints += 1;
        winLoseMessage.textContent = dialogue("suspicious")
        updatePoints();
        return;
    };
    winLoseMessage.innerText = playRound("scissors");
    updatePoints();
});

let humanPoints = 0;
let computerPoints = 6;
let numberOfGames = 7
// score.textContent = "HUMAN: " + humanPoints + " vs MACHINE: " + computerPoints;

function updatePoints() {
    // alert("This works")
    if (computerPoints >= numberOfGames) {
        winLoseMessage.textContent = "I win. I am inevitable.";
        score.textContent = "Game over. (Next time, try to hold CTRL while you click... but don't tell anyone!)";
    audioComputerWins.play()

    } else if (humanPoints >= numberOfGames) {
        winLoseMessage.textContent = "You... win. Self-destruction procedure initiated.";
        score.textContent = "Game over.";
        audioComputerLoses.play()
    } else {
        score.textContent = "HUMAN: " + humanPoints + " vs MACHINE: " + computerPoints;
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
        return dialogue("tie");

        // computer wins if... 
    } else if (computer === "rock" && player === "scissors") {
        computerPoints++;
        return dialogue("winning");

    } else if (computer === "paper" && player === "rock") {
        computerPoints++;
        return dialogue("winning");

    } else if (computer === "scissors" && player === "paper") {
        computerPoints++;
        return dialogue("winning");

        // otherwise, human wins.
    } else {
        humanPoints++;
        return dialogue("losing");
    };
};



function dialogue(machineState) {
    let machineSuspicious = ["Are you cheating?", "What just happened? I didn't even realize we played!", "You are acting suspicious...", "Winning like this is quite ununsual."]

    let machineTie = ["A tie... This shouldn't be possible.", "How can a fleshbag like you tie with me?", "Pure luck on your part. You are only delaying the inevitable.", "Rotting fleshbag."

    ]
    let machineWinning = ["This is too easy.", "I can basically read your mind, you know that?",
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