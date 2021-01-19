let winner = null;
let rollsLeft = 3;
let diceNumbers = ["", "", "", "", ""];
let dicesClicked = ["1", "2", "3", "4", "5"];
let waitingForNextMove = true;
let totalPointsPlayer1 = 0;
let totalPointsPlayer2 = 0;
let players = ["Player 1", "Player 2"];
let currentPlayer = Math.floor(Math.random() * 2);

// let keepDice = function() {
//    if (this.id) {removeEventListener('click', rollsLeft)
//    }
// };

let rollDices = function() {
    let rollButton = document.getElementsByClassName("rollButton");
    if (rollsLeft > 0 ) {

    }
};

function resetVariables() {
    waitingForNextMove = false;
    let nextButton = document.getElementsByClassName("nextButton");
    nextButton.addEventListener('click', );
};