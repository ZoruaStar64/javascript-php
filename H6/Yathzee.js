let winner = null;
let rollsLeft = 3;
let diceNumbers = [];
let dicesClicked = ["1", "2", "3", "4", "5"];
let waitingForNextMove = true;
let totalPointsPlayer1 = 0;
let totalPointsPlayer2 = 0;
let players = ["Player 1", "Player 2"];
let currentPlayer = Math.floor(Math.random() * 2);
let dice = document.getElementsByTagName("img")

// let keepDice = function() {
//    if (this.id) {removeEventListener('click', rollsLeft)
//    }
// };

let rollButton = document.getElementsByClassName("rollButton");
rollButton.addEventListener('çlick', rollDices())

function rollDices() {
    if (rollsLeft > 0) {
        for (let i = 0; i < diceNumbers.length; i++) {
            let random = Math.floor(Math.random() * diceNumbers.length);
            let temp = diceNumbers[i];
            diceNumbers[i] = diceNumbers[random];
            diceNumbers[random] = temp;
        }
        }
        rollsLeft = rollsLeft -1;
        if (rollsLeft === 3) {
           let rollButton = document.getElementsByClassName("rollButton");
            rollButton.innerHTML = "Rolls left = 3"
        }

        else if (rollsLeft === 2) {
            let rollButton = document.getElementsByClassName("rollButton");
            rollButton.innerHTML = "Rolls left = 3"
        }

        else if (rollsLeft === 1) {
            let rollButton = document.getElementsByClassName("rollButton");
            rollButton.innerHTML = "Rolls left = 3"
        }

        else if (rollsLeft === 0) {
            rollButton.removeEventListener('click');
        }
    }




function resetVariables() {
    waitingForNextMove = false;
    let nextButton = document.getElementsByClassName("nextButton");
    nextButton.addEventListener('click', );
}

function switchPlayer() {
    let nextButton = document.getElementById("nextButton");
    if (currentPlayer === 0) {
        nextButton.innerHTML = "Switch the turn to Player 1!";
        currentPlayer = 1;
    } else {
        nextButton.innerHTML = "Switch the turn to Player 2!";
        currentPlayer = 0;
    }
}