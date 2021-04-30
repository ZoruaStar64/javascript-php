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
let doubles = false;
let triples = false;
let fullHouse = false;

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
        for (let teller = 0; teller < 5; teller++) {
            let randomDiceRoll = Math.floor(Math.random() * 6 + 1);
            diceNumbers.push(randomDiceRoll);
            console.log(randomDiceRoll);
            console.log(diceNumbers);

            diceImages[teller].src = "../img/dice" + randomDiceRoll + ".jpg"; //template literal
            //om de beurt vullen

            if (currentPlayer === 0) {
                if (randomDiceRoll === 1) {
                    ones += 1;
                }
                let P1Aces = document.getElementById("P1Aces")
                if (ones => 1) {
                    P1Aces.value = '+ ' + ones + ' points';
                    P1Aces.style.backgroundColor = "#ff7423";
                } else if (ones === 0) {
                    P1Aces.value = '0 Points';
                    P1Aces.style.backgroundColor = "#d04b03";
                }

                if (randomDiceRoll === 2) {
                    twos += 1;
                }
                let P1Twos = document.getElementById("P1Twos")
                if (twos => 1) {
                    P1Twos.value = '+ ' + (2 * twos) + ' points';
                    P1Twos.style.backgroundColor = "#ff7423";
                } else if (twos === 0) {
                    P1Twos.value = '0 Points';
                    P1Twos.style.backgroundColor = "#d04b03";
                }

                if (randomDiceRoll === 3) {
                    threes += 1;
                }
                let P1Threes = document.getElementById("P1Threes")
                if (threes => 1) {
                    P1Threes.value = '+ ' + (3 * threes) + ' points';
                    P1Threes.style.backgroundColor = "#ff7423";
                } else if (threes === 0) {
                    P1Threes.value = '0 Points';
                    P1Threes.style.backgroundColor = "#d04b03";
                }

                if (randomDiceRoll === 4) {
                    fours += 1;
                }
                let P1Fours = document.getElementById("P1Fours")
                if (fours => 1) {
                    P1Fours.value = '+ ' + (4 * fours) + ' points';
                    P1Fours.style.backgroundColor = "#ff7423";
                } else if (fours === 0) {
                    P1Fours.value = '0 Points';
                    P1Fours.style.backgroundColor = "#d04b03";
                }

                if (randomDiceRoll === 5) {
                    fives += 1;
                }
                let P1Fives = document.getElementById("P1Fives")
                if (fives => 1) {
                    P1Fives.value = '+ ' + (5 * fives) + ' points';
                    P1Fives.style.backgroundColor = "#ff7423";
                } else if (fives === 0) {
                    P1Fives.value = '0 Points';
                    P1Fives.style.backgroundColor = "#d04b03";
                }

                if (randomDiceRoll === 6) {
                    sixes += 1;
                }
                let P1Sixes = document.getElementById("P1Sixes")
                if (sixes => 1) {
                    P1Sixes.value = '+ ' + (6 * sixes) + ' points';
                    P1Sixes.style.backgroundColor = "#ff7423";
                } else if (sixes === 0) {
                    P1Sixes.value = '0 Points';
                    P1Sixes.style.backgroundColor = "#d04b03";
                }

                //Part 2 Player 1
                //Three of a kind
                if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
                    let P1X3 = document.getElementById("P1X3")
                    P1X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                    P1X3.style.backgroundColor = "#ff7423";
                } else {
                    P1X3.value = '+ 0 Points';
                    P1X3.style.backgroundColor = "#d04b03";
                }

                //Four of a kind
                if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
                    let P1X4 = document.getElementById("P1X4")
                    P1X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                    P1X4.style.backgroundColor = "#ff7423";
                } else {
                    P1X4.value = '+ 0 Points';
                    P1X4.style.backgroundColor = "#d04b03";
                }

                //Full House
                if (ones === 2 || twos === 2 || threes === 2 || fours === 2 || fives === 2 || sixes === 2) {
                    doubles = true;
                    if (ones === 3 || twos === 3 || threes === 3 || fours === 3 || fives === 3 || sixes === 3) {
                        triples = true;
                        if (doubles === true && triples === true) {
                            fullHouse = true
                        }
                        if (fullHouse === true) {
                            let P1House = document.getElementById("P1House")
                            P1House.value = '+ 25 Points';
                            P1House.style.backgroundColor = "#ff7423";
                        } else {
                            P1House.value = '+ 0 Points';
                            P1House.style.backgroundColor = "#d04b03";
                        }
                    }
                }

                //Small Street
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
                    let P1SmallS = document.getElementById("P1SmallS")
                    P1SmallS.value = '+ 30 Points';
                    P1SmallS.style.backgroundColor = "#ff7423";
                } else {
                    P1SmallS.value = '+ 0 Points';
                    P1SmallS.style.backgroundColor = "#d04b03";
                }

                //Large Street
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
                    let P1LargeS = document.getElementById("P1LargeS")
                    P1LargeS.value = '+ 40 Points';
                    P1LargeS.style.backgroundColor = "#ff7423";
                } else {
                    P1LargeS.value = '+ 0 Points';
                    P1LargeS.style.backgroundColor = "#d04b03";
                }

                //Yathzee
                if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
                    let P1Yathzee = document.getElementById("P1Yathzee")
                    P1Yathzee.value = '+ 50 Points';
                    P1Yathzee.style.backgroundColor = "#ff7423";
                } else {
                    P1Yathzee.value = '+ 0 Points';
                    P1Yathzee.style.backgroundColor = "#d04b03";
                }

                //Chance
                if (ones > 0 || twos > 0 || threes > 0 || fours > 0 || fives > 0 || sixes > 0) {
                    let P1Chance = document.getElementById("P1Chance")
                    P1Chance.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                    P1Chance.style.backgroundColor = "#ff7423";
                }
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
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddTwos() {
    topPointsPlayer1 += (2 * twos);
    P1Top.innerHTML = topPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddThrees() {
    topPointsPlayer1 += (3 * threes);
    P1Top.innerHTML = topPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddFours() {
    topPointsPlayer1 += (4 * fours);
    P1Top.innerHTML = topPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddFives() {
    topPointsPlayer1 += (5 * fives);
    P1Top.innerHTML = topPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddSixes() {
    topPointsPlayer1 += (6 * sixes);
    P1Top.innerHTML = topPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
    if (topPointsPlayer1 > 62) {
        let BonusP1 = true;
        if (BonusP1 === true) {
            let bonusImageP1 = document.getElementById("bonusImageP1")
            bonusImageP1.src = "../img/check.png";
            totalPointsPlayer1 += 35;
            P1Total.innerHTML = totalPointsPlayer1;
        }
    }
}

function P1AddX3() {
    if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
        bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddX4() {
    if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
        bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddFH() {
    if (fullHouse === true) {
        bottomPointsPlayer1 += 25;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddSS() {
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        bottomPointsPlayer1 += 30;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddLS() {
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        bottomPointsPlayer1 += 40;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddYathzee() {
    if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
        bottomPointsPlayer1 += 50;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    else {
        bottomPointsPlayer1 += 0;
        P1Bottom.innerHTML = bottomPointsPlayer1;
    }
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
}

function P1AddChance() {
    bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
    P1Bottom.innerHTML = bottomPointsPlayer1;
    totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
    P1Total.innerHTML = totalPointsPlayer1;
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

    let P1X3 = document.getElementById("P1X3");
    P1X3.addEventListener('click', P1AddX3);

    let P1X4 = document.getElementById("P1X4");
    P1X4.addEventListener('click', P1AddX4);

    let P1House = document.getElementById("P1House");
    P1House.addEventListener('click', P1AddFH);

    let P1SmallS = document.getElementById("P1SmallS");
    P1SmallS.addEventListener('click', P1AddSS);

    let P1LargeS = document.getElementById("P1LargeS");
    P1LargeS.addEventListener('click', P1AddLS);

    let P1Yathzee = document.getElementById("P1Yathzee");
    P1Yathzee.addEventListener('click', P1AddYathzee);

    let P1Chance = document.getElementById("P1Chance");
    P1Chance.addEventListener('click', P1AddChance);


}
else if (currentPlayer === 1) {

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


