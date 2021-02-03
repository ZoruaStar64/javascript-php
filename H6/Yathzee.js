"use strict";

let winner = null;
let rollsLeft = 3;
let diceNumbers = [];
let dicesClicked = ["1", "2", "3", "4", "5"];
let waitingForNextMove = true;
let totalPointsPlayer1 = 0;
let totalPointsPlayer2 = 0;
let players = ["Player 1", "Player 2"];
let currentPlayer = Math.floor(Math.random() * 2);
//let dice = document.getElementsByTagName("img")

const dice1Image = document.getElementById("diceOne");
const dice2Image = document.getElementById("diceTwo");
const dice3Image = document.getElementById("diceThree");
const dice4Image = document.getElementById("diceFour");
const dice5Image = document.getElementById("diceFive")
const diceImages = ["dice1Image", "dice2Image", "dice3Image", "dice4Image", "dice5Image"];


//de andere vier ophalen
console.log(dice1Image);
console.log(dice2Image);
console.log(dice3Image);
console.log(dice4Image);
console.log(dice5Image);
// let keepDice = function() {
//    if (this.id) {removeEventListener('click', rollsLeft)
//    }
// };



function rollDices() {
    if (rollsLeft > 0) {
        //array vullen

        for (let teller = 1; teller < 6; teller++){
            let randomDiceRoll = Math.floor(Math.random() * 6 + 1);
            //randomDiceRoll.push(randomDiceRoll);
            diceImages[teller].src = "../img/dice" + randomDiceRoll +".jpg"; //template literal

            //om de beurt vullen
        }


    }
    rollsLeft = rollsLeft -1;
    if (rollsLeft === 3) {
       let rollButton = document.querySelector(".rollButton");
        rollButton.innerHTML = "Rolls left = 3"
    }

    else if (rollsLeft === 2) {
        let rollButton = document.querySelector(".rollButton");
        rollButton.innerHTML = "Rolls left = 2"
    }

    else if (rollsLeft === 1) {
        let rollButton = document.querySelector(".rollButton");
        rollButton.innerHTML = "Rolls left = 1"
    }

    else if (rollsLeft === 0) {
        rollButton.innerHTML = "No more rolls left!"
        rollButton.removeEventListener('click', rollDices);
    }
}

let rollButton = document.querySelector(".rollButton");
console.log(rollButton);
rollButton.addEventListener("click", rollDices);

function resetVariables() {
    rollsLeft = 3;

}



function switchPlayer() {
    let nextButton = document.querySelector(".nextButton");
    if (currentPlayer === 0) {
        nextButton.innerHTML = "Switch the turn to Player 1!";
        currentPlayer = 1;
    } else {
        nextButton.innerHTML = "Switch the turn to Player 2!";
        currentPlayer = 0;
    }
}

let nextButton = document.querySelector(".nextButton");
nextButton.addEventListener('click', switchPlayer, resetVariables);