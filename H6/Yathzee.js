"use strict";

let winner = null;
let rollsLeft = 3;
let diceNumbers = [];

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

let dicesClicked = ["1", "2", "3", "4", "5"];
let dicesClickedTotal = 0;
let waitingForNextMove = true;

let topPointsPlayer1 = 0;
let bottomPointsPlayer1 = 0
let totalPointsPlayer1 = topPointsPlayer1 + bottomPointsPlayer1;

let topPointsPlayer2 = 0;
let bottomPointsPlayer2 = 0;
let totalPointsPlayer2 = topPointsPlayer2 + bottomPointsPlayer2;

let players = ["Player 1", "Player 2"];
let currentPlayer = Math.floor(Math.random() * 2);
//let dice = document.getElementsByTagName("img")

const dice1Image = document.getElementById("diceOne");
const dice2Image = document.getElementById("diceTwo");
const dice3Image = document.getElementById("diceThree");
const dice4Image = document.getElementById("diceFour");
const dice5Image = document.getElementById("diceFive")
const diceImages = [dice1Image, dice2Image, dice3Image, dice4Image, dice5Image];

let P1Top = document.getElementById("P1Top")
P1Top.innerHTML = topPointsPlayer1;

let P1Bottom = document.getElementById("P1Bottom")
P1Bottom.innerHTML = bottomPointsPlayer1;

let P1Total = document.getElementById("P1Total")
P1Total.innerHTML = totalPointsPlayer1;

// let keepDice = function() {
//    if (this.id) {removeEventListener('click', rollsLeft)
//    }
// };


function rollDices() {
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;
    if (rollsLeft > 0) {
        //array vullen
        diceNumbers = [];
        for (let teller = 0; teller < 5; teller++){
                let randomDiceRoll = Math.floor(Math.random() * 6 + 1);
                diceNumbers.push(randomDiceRoll);
                console.log(randomDiceRoll);
                console.log(diceNumbers);

                diceImages[teller].src = "../img/dice" + randomDiceRoll + ".jpg"; //template literal
                //om de beurt vullen

            if (randomDiceRoll === 1) {
                ones += 1;
            }
            let P1Aces = document.getElementById("P1Aces")
            if (ones => 1) {
                P1Aces.value = '+ ' + ones + ' points';
            } else if (ones === 0) {
                P1Aces.value = '0 Points';
            }

            if (randomDiceRoll === 2) {
                twos += 1;
            }
            let P1Twos = document.getElementById("P1Twos")
            if (twos => 1) {
                P1Twos.value = '+ ' + (2 * twos) + ' points';
            } else if (twos === 0) {
                P1Twos.value = '0 Points';
            }

            if (randomDiceRoll === 3) {
                threes += 1;
            }
            let P1Threes = document.getElementById("P1Threes")
            if (threes => 1) {
                P1Threes.value = '+ ' + (3 * threes) + ' points';
            } else if (threes === 0) {
                P1Threes.value = '0 Points';
            }

            if (randomDiceRoll === 4) {
                fours += 1;
            }
            let P1Fours = document.getElementById("P1Fours")
            if (fours => 1) {
                P1Fours.value = '+ ' + (4 * fours) + ' points';
            } else if (fours === 0) {
                P1Fours.value = '0 Points';
            }

            if (randomDiceRoll === 5) {
                fives += 1;
            }
            let P1Fives = document.getElementById("P1Fives")
            if (fives => 1) {
                P1Fives.value = '+ ' + (5 * fives) + ' points';
            } else if (fives === 0) {
                P1Fives.value = '0 Points';
            }

            if (randomDiceRoll === 6) {
                sixes += 1;
            }
            let P1Sixes = document.getElementById("P1Sixes")
            if (sixes => 1) {
                P1Sixes.value = '+ ' + (6 * sixes) + ' points';
            } else if (sixes === 0) {
                P1Sixes.value = '0 Points';
            }
            }

        rollsLeft = rollsLeft -1;
    }

    if (rollsLeft === 3) {

        rollButton.innerHTML = "Rolls left = 3"
        rollButton.style.color = "green"
    }

    else if (rollsLeft === 2) {

        rollButton.innerHTML = "Rolls left = 2"
        rollButton.style.color = "yellow"
    }

    else if (rollsLeft === 1) {

        rollButton.innerHTML = "Rolls left = 1"
        rollButton.style.color = "#cd6100"
    }

    else if (rollsLeft === 0) {
        rollButton.innerHTML = "No more rolls left!"
        rollButton.style.color = "red"
        rollButton.removeEventListener('click', rollDices);
    }
}

function P1AddOnes() {
    topPointsPlayer1 += ones;
    P1Top.innerHTML = topPointsPlayer1;
}

function P1AddTwos() {
    topPointsPlayer1 += (2 * twos);
    P1Top.innerHTML = topPointsPlayer1;
}

function P1AddThrees() {
    topPointsPlayer1 += (3 * threes);
    P1Top.innerHTML = topPointsPlayer1;
}

function P1AddFours() {
    topPointsPlayer1 += (4 * fours);
    P1Top.innerHTML = topPointsPlayer1;
}

function P1AddFives() {
    topPointsPlayer1 += (5 * fives);
    P1Top.innerHTML = topPointsPlayer1;
}

function P1AddSixes() {
    topPointsPlayer1 += (6 * sixes);
    P1Top.innerHTML = topPointsPlayer1;
}

if (currentPlayer === 0) {
    let P1Aces = document.getElementById("P1Aces");
    P1Aces.addEventListener('click', P1AddOnes);

    let P1Twos = document.getElementById("P1Twos");
    P1Twos.addEventListener('click', P1AddTwos);

    let P1Threes = document.getElementById("P1Threes");
    P1Threes.addEventListener('click', P1AddThrees);

    let P1Fours = document.getElementById("P1Fours");
    P1Fours.addEventListener('click', P1AddFours);

    let P1Fives = document.getElementById("P1Fives");
    P1Fives.addEventListener('click', P1AddFives);

    let P1Sixes = document.getElementById("P1Sixes");
    P1Sixes.addEventListener('click', P1AddSixes);
}
else if (currentPlayer === 1) {

}

if (topPointsPlayer1 > 62) {
    let bonusImageP1 = document.getElementById("bonusImageP1")
    bonusImageP1.style.backgroundImage = "../img/check.png";
}


let rollButton = document.querySelector(".rollButton");
console.log(rollButton);
rollButton.addEventListener("click", rollDices);

if (rollsLeft === 3) {
    rollButton.innerHTML = "Rolls left = 3"
    rollButton.style.color = "green"
}



function resetVariables() {
    rollsLeft = 3;
    rollButton.addEventListener("click", rollDices);
    rollButton.innerHTML = "Rolls left = 3"
    rollButton.style.color = "green"
    //diceImages.src = "../img/dice0.jpg"
    diceNumbers = []
    console.log(diceNumbers);
    ones = 0;
    let P1Aces = document.getElementById("P1Aces")
    if (ones => 1) {
        P1Aces.value = '+ ' + ones + ' points';
    } else if (ones === 0) {
        P1Aces.value = '0 Points';
    }

    twos = 0;
    let P1Twos = document.getElementById("P1Twos")
    if (twos => 1) {
        P1Twos.value = '+ ' + (2 * twos) + ' points';
    } else if (twos === 0) {
        P1Twos.value = '0 Points';
    }

    threes = 0;
    let P1Threes = document.getElementById("P1Threes")
    if (threes => 1) {
        P1Threes.value = '+ ' + (3 * threes) + ' points';
    } else if (threes === 0) {
        P1Threes.value = '0 Points';
    }

    fours = 0;
    let P1Fours = document.getElementById("P1Fours")
    if (fours => 1) {
        P1Fours.value = '+ ' + (4 * fours) + ' points';
    } else if (fours === 0) {
        P1Fours.value = '0 Points';
    }

    fives = 0;
    let P1Fives = document.getElementById("P1Fives")
    if (fives => 1) {
        P1Fives.value = '+ ' + (5 * fives) + ' points';
    } else if (fives === 0) {
        P1Fives.value = '0 Points';
    }

    sixes = 0;
    let P1Sixes = document.getElementById("P1Sixes")
    if (sixes => 1) {
        P1Sixes.value = '+ ' + (6 * sixes) + ' points';
    } else if (sixes === 0) {
        P1Sixes.value = '0 Points';
    }
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
nextButton.addEventListener('click', resetVariables);
nextButton.addEventListener('click', switchPlayer);


