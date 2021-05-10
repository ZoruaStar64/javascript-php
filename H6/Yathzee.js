"use strict";

let winner = null;
let buttonsPlayer1Clicked = 0; //if this is 13 and buttonsplayer2 is also 13 then the game ends
let buttonsPlayer2Clicked = 0; //and picks the winner with the higher Final Score
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
let currentPlayer = 0;
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

let P2Top = document.getElementById("P2Top")
P2Top.innerHTML = topPointsPlayer2;

let P2Bottom = document.getElementById("P2Bottom")
P2Bottom.innerHTML = bottomPointsPlayer2;

let P2Total = document.getElementById("P2Total")
P2Total.innerHTML = totalPointsPlayer2;

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
    doubles = false;
    triples = false;
    fullHouse = false;
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
            if (randomDiceRoll === 1) {
                ones += 1;
            }

            let Aces = currentPlayer === 0 ? document.getElementById("P1Aces") : document.getElementById("P2Aces");
            if (ones => 1) {
                Aces.value = '+ ' + ones + ' points';
                Aces.style.backgroundColor = "#ff7423";
            } else if (ones === 0) {
                Aces.value = '0 Points';
                Aces.style.backgroundColor = "#d04b03";
            }


            if (randomDiceRoll === 2) {
                twos += 1;
            }
            let Twos = currentPlayer === 0 ? document.getElementById("P1Twos") : document.getElementById("P2Twos");
            if (twos => 1) {
                Twos.value = '+ ' + (2 * twos) + ' points';
                Twos.style.backgroundColor = "#ff7423";
            } else if (twos === 0) {
                Twos.value = '0 Points';
                Twos.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 3) {
                threes += 1;
            }
            let Threes = currentPlayer === 0 ? document.getElementById("P1Threes") : document.getElementById("P2Threes");
            if (threes => 1) {
                Threes.value = '+ ' + (3 * threes) + ' points';
                Threes.style.backgroundColor = "#ff7423";
            } else if (threes === 0) {
                Threes.value = '0 Points';
                Threes.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 4) {
                fours += 1;
            }
            let Fours = currentPlayer === 0 ? document.getElementById("P1Fours") : document.getElementById("P2Fours");
            if (fours => 1) {
                Fours.value = '+ ' + (4 * fours) + ' points';
                Fours.style.backgroundColor = "#ff7423";
            } else if (fours === 0) {
                Fours.value = '0 Points';
                Fours.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 5) {
                fives += 1;
            }
            let Fives = currentPlayer === 0 ? document.getElementById("P1Fives") : document.getElementById("P2Fives");
            if (fives => 1) {
                Fives.value = '+ ' + (5 * fives) + ' points';
                Fives.style.backgroundColor = "#ff7423";
            } else if (fives === 0) {
                Fives.value = '0 Points';
                Fives.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 6) {
                sixes += 1;
            }
            let Sixes = currentPlayer === 0 ? document.getElementById("P1Sixes") : document.getElementById("P2Sixes");
            if (sixes => 1) {
                Sixes.value = '+ ' + (6 * sixes) + ' points';
                Sixes.style.backgroundColor = "#ff7423";
            } else if (sixes === 0) {
                Sixes.value = '0 Points';
                Sixes.style.backgroundColor = "#d04b03";
            }

            //Part 2
            //Three of a kind
            let X3 = currentPlayer === 0 ? document.getElementById("P1X3") : document.getElementById("P2X3");
            if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {

                X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                X3.style.backgroundColor = "#ff7423";
            } else {
                X3.value = '+ 0 Points';
                X3.style.backgroundColor = "#d04b03";
            }

            //Four of a kind
            let X4 = currentPlayer === 0 ? document.getElementById("P1X4") : document.getElementById("P2X4");
            if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {

                X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                X4.style.backgroundColor = "#ff7423";
            } else {
                X4.value = '+ 0 Points';
                X4.style.backgroundColor = "#d04b03";
            }

            //Full House

            let House = currentPlayer === 0 ? document.getElementById("P1House") : document.getElementById("P2House");
            if (ones === 3 || twos === 3 || threes === 3 || fours === 3 || fives === 3 || sixes === 3) {
                triples = true;
                doubles = false;
            }
            if (ones === 2 || twos === 2 || threes === 2 || fours === 2 || fives === 2 || sixes === 2) {
                doubles = true;
            }
            if (doubles === true && triples === true) {
                fullHouse = true
            }
            if (fullHouse === true) {

                House.value = '+ 25 Points';
                House.style.backgroundColor = "#ff7423";
            } else if (fullHouse === false) {
                House.value = '+ 0 Points';
                House.style.backgroundColor = "#d04b03";
            }



                //Small Street
            let SmallS = currentPlayer === 0 ? document.getElementById("P1SmallS") : document.getElementById("P2SmallS");
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    threes > 0 && fours > 0 && fives > 0 && sixes > 0) {

                    SmallS.value = '+ 30 Points';
                    SmallS.style.backgroundColor = "#ff7423";
                } else {
                    SmallS.value = '+ 0 Points';
                    SmallS.style.backgroundColor = "#d04b03";
                }

                //Large Street
            let LargeS = currentPlayer === 0 ? document.getElementById("P1LargeS") : document.getElementById("P2LargeS");
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {

                    LargeS.value = '+ 40 Points';
                    LargeS.style.backgroundColor = "#ff7423";
                } else {
                    LargeS.value = '+ 0 Points';
                    LargeS.style.backgroundColor = "#d04b03";
                }

                //Yathzee
            let Yathzee = currentPlayer === 0 ? document.getElementById("P1Yathzee") : document.getElementById("P2Yathzee");
                if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {

                    Yathzee.value = '+ 50 Points';
                    Yathzee.style.backgroundColor = "#ff7423";
                } else {
                    Yathzee.value = '+ 0 Points';
                    Yathzee.style.backgroundColor = "#d04b03";
                }

                //Chance
            let Chance = currentPlayer === 0 ? document.getElementById("P1Chance") : document.getElementById("P2Chance");
                if (ones > 0 || twos > 0 || threes > 0 || fours > 0 || fives > 0 || sixes > 0) {

                    Chance.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
                    Chance.style.backgroundColor = "#ff7423";
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

//Player add functions
function AddOnes() {
    if (currentPlayer === 0) {
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
    else {
        topPointsPlayer2 += ones;
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddTwos() {
    if (currentPlayer === 0) {
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
    } else {
        topPointsPlayer2 += (2 * twos);
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddThrees() {
    if (currentPlayer === 0) {
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
    else {
        topPointsPlayer2 += (3 * threes);
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddFours() {
    if (currentPlayer === 0) {
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
    else {
        topPointsPlayer2 += (4 * fours);
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddFives() {
    if (currentPlayer === 0) {
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
    else {
        topPointsPlayer2 += (5 * fives);
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddSixes() {
    if (currentPlayer === 0) {
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
    else {
        topPointsPlayer2 += (6 * sixes);
        P2Top.innerHTML = topPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        if (topPointsPlayer2 > 62) {
            let BonusP2 = true;
            if (BonusP2 === true) {
                let bonusImageP2 = document.getElementById("bonusImageP2")
                bonusImageP2.src = "../img/check.png";
                totalPointsPlayer2 += 35;
                P2Total.innerHTML = totalPointsPlayer2;
            }
        }
    }
}

function AddX3() {
    if (currentPlayer === 0) {
        if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
            bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
            bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddX4() {
    if (currentPlayer === 0) {
        if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
            bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
            bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddFH() {
    if (currentPlayer === 0) {
        if (fullHouse === true) {
            bottomPointsPlayer1 += 25;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (fullHouse === true) {
            bottomPointsPlayer2 += 25;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddSS() {
    if (currentPlayer === 0) {
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer1 += 30;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer2 += 30;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddLS() {
    if (currentPlayer === 0) {
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer1 += 40;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer2 += 40;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddYathzee() {
    if (currentPlayer === 0) {
        if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
            bottomPointsPlayer1 += 50;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
            bottomPointsPlayer2 += 50;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}

function AddChance() {
    if (currentPlayer === 0) {
        bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P1Bottom.innerHTML = bottomPointsPlayer1;
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
    } else {
        bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P2Bottom.innerHTML = bottomPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
    }
}



//eventlistener giver

    let Aces = document.getElementById("P1Aces");
    Aces.addEventListener('click', AddOnes);

    let Twos = document.getElementById("P1Twos");
    Twos.addEventListener('click', AddTwos);

    let Threes = document.getElementById("P1Threes");
    Threes.addEventListener('click', AddThrees);

    let Fours = document.getElementById("P1Fours");
    Fours.addEventListener('click', AddFours);

    let Fives = document.getElementById("P1Fives");
    Fives.addEventListener('click', AddFives);

    let Sixes = document.getElementById("P1Sixes");
    Sixes.addEventListener('click', AddSixes);

    let X3 = document.getElementById("P1X3");
    X3.addEventListener('click', AddX3);

    let X4 = document.getElementById("P1X4");
    X4.addEventListener('click', AddX4);

    let House = document.getElementById("P1House");
    House.addEventListener('click', AddFH);

    let SmallS = document.getElementById("P1SmallS");
    SmallS.addEventListener('click', AddSS);

    let LargeS = document.getElementById("P1LargeS");
    LargeS.addEventListener('click', AddLS);

    let Yathzee = document.getElementById("P1Yathzee");
    Yathzee.addEventListener('click', AddYathzee);

    let Chance = document.getElementById("P1Chance");
    Chance.addEventListener('click', AddChance);



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
    let Aces = currentPlayer === 0 ? document.getElementById("P1Aces") : document.getElementById("P2Aces");
    if (ones => 1) {
        Aces.value = '+ ' + ones + ' points';
        Aces.style.backgroundColor = "#ff7423";
    } else if (ones === 0) {
        Aces.value = '0 Points';
        Aces.style.backgroundColor = "#d04b03";
    }

        twos = 0;
    let Twos = currentPlayer === 0 ? document.getElementById("P1Twos") : document.getElementById("P2Twos");
    if (twos => 1) {
        Twos.value = '+ ' + (2 * twos) + ' points';
        Twos.style.backgroundColor = "#ff7423";
    } else if (twos === 0) {
        Twos.value = '0 Points';
        Twos.style.backgroundColor = "#d04b03";
    }

        threes = 0;
    let Threes = currentPlayer === 0 ? document.getElementById("P1Threes") : document.getElementById("P2Threes");
    if (threes => 1) {
        Threes.value = '+ ' + (3 * threes) + ' points';
        Threes.style.backgroundColor = "#ff7423";
    } else if (threes === 0) {
        Threes.value = '0 Points';
        Threes.style.backgroundColor = "#d04b03";
    }

        fours = 0;
    let Fours = currentPlayer === 0 ? document.getElementById("P1Fours") : document.getElementById("P2Fours");
    if (fours => 1) {
        Fours.value = '+ ' + (4 * fours) + ' points';
        Fours.style.backgroundColor = "#ff7423";
    } else if (fours === 0) {
        Fours.value = '0 Points';
        Fours.style.backgroundColor = "#d04b03";
    }

        fives = 0;
    let Fives = currentPlayer === 0 ? document.getElementById("P1Fives") : document.getElementById("P2Fives");
    if (fives => 1) {
        Fives.value = '+ ' + (5 * fives) + ' points';
        Fives.style.backgroundColor = "#ff7423";
    } else if (fives === 0) {
        Fives.value = '0 Points';
        Fives.style.backgroundColor = "#d04b03";
    }

        sixes = 0;
    let Sixes = currentPlayer === 0 ? document.getElementById("P1Sixes") : document.getElementById("P2Sixes");
    if (sixes => 1) {
        Sixes.value = '+ ' + (6 * sixes) + ' points';
        Sixes.style.backgroundColor = "#ff7423";
    } else if (sixes === 0) {
        Sixes.value = '0 Points';
        Sixes.style.backgroundColor = "#d04b03";
    }

    //Part 2
    //Three of a kind
    let X3 = currentPlayer === 0 ? document.getElementById("P1X3") : document.getElementById("P2X3");
    if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
        X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
        X3.style.backgroundColor = "#ff7423";
    } else {
        X3.value = '+ 0 Points';
        X3.style.backgroundColor = "#d04b03";
    }

    //Four of a kind
    let X4 = currentPlayer === 0 ? document.getElementById("P1X4") : document.getElementById("P2X4");
    if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
        X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
        X4.style.backgroundColor = "#ff7423";
    } else {
        X4.value = '+ 0 Points';
        X4.style.backgroundColor = "#d04b03";
    }

    //Full House
    doubles = false;
    triples = false;
    fullHouse = false;
    let House = currentPlayer === 0 ? document.getElementById("P1House") : document.getElementById("P2House");
    if (ones === 3 || twos === 3 || threes === 3 || fours === 3 || fives === 3 || sixes === 3) {
        triples = true;
        doubles = false;
    }
    if (ones === 2 || twos === 2 || threes === 2 || fours === 2 || fives === 2 || sixes === 2) {
        doubles = true;
    }
    if (doubles === true && triples === true) {
        fullHouse = true
    }
    if (fullHouse === true) {

        House.value = '+ 25 Points';
        House.style.backgroundColor = "#ff7423";
    } else if (fullHouse === false) {
        House.value = '+ 0 Points';
        House.style.backgroundColor = "#d04b03";
    }

    //Small Street
    let SmallS = currentPlayer === 0 ? document.getElementById("P1SmallS") : document.getElementById("P2SmallS");
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        SmallS.value = '+ 30 Points';
        SmallS.style.backgroundColor = "#ff7423";
    } else {
        SmallS.value = '+ 0 Points';
        SmallS.style.backgroundColor = "#d04b03";
    }

    //Large Street
    let LargeS = currentPlayer === 0 ? document.getElementById("P1LargeS") : document.getElementById("P2LargeS");
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        LargeS.value = '+ 40 Points';
        LargeS.style.backgroundColor = "#ff7423";
    } else {
        LargeS.value = '+ 0 Points';
        LargeS.style.backgroundColor = "#d04b03";
    }

    //Yathzee
    let Yathzee = currentPlayer === 0 ? document.getElementById("P1Yathzee") : document.getElementById("P2Yathzee");
    if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
        Yathzee.value = '+ 50 Points';
        Yathzee.style.backgroundColor = "#ff7423";
    } else {
        Yathzee.value = '+ 0 Points';
        Yathzee.style.backgroundColor = "#d04b03";
    }

    //Chance
    let Chance = currentPlayer === 0 ? document.getElementById("P1Chance") : document.getElementById("P2Chance");
        Chance.value = '+ 0 points';
        Chance.style.backgroundColor = "#ff7423";

}


function switchPlayer() {
    let nextButton = document.querySelector(".nextButton");
    if (currentPlayer === 0) {
        nextButton.innerHTML = "Switch the turn to Player 1!";
        currentPlayer = 1;

        //Player 2's functions
        let Aces = document.getElementById("P1Aces");
        Aces.removeEventListener('click', AddOnes)
        Aces = document.getElementById("P2Aces");
        Aces.addEventListener('click', AddOnes);

        let Twos = document.getElementById("P1Twos");
        Twos.removeEventListener('click', AddTwos)
        Twos = document.getElementById("P2Twos");
        Twos.addEventListener('click', AddTwos);

        let Threes = document.getElementById("P1Threes");
        Threes.removeEventListener('click', AddThrees)
        Threes = document.getElementById("P2Threes");
        Threes.addEventListener('click', AddThrees);

        let Fours = document.getElementById("P1Fours");
        Fours.removeEventListener('click', AddFours)
        Fours = document.getElementById("P2Fours");
        Fours.addEventListener('click', AddFours);

        let Fives = document.getElementById("P1Fives");
        Fives.removeEventListener('click', AddFives)
        Fives = document.getElementById("P2Fives");
        Fives.addEventListener('click', AddFives);

        let Sixes = document.getElementById("P1Sixes");
        Sixes.removeEventListener('click', AddSixes)
        Sixes = document.getElementById("P2Sixes");
        Sixes.addEventListener('click', AddSixes);

        let X3 = document.getElementById("P1X3");
        X3.removeEventListener('click', AddX3)
        X3 = document.getElementById("P2X3");
        X3.addEventListener('click', AddX3);

        let X4 = document.getElementById("P1X4");
        X4.removeEventListener('click', AddX4)
        X4 = document.getElementById("P2X4");
        X4.addEventListener('click', AddX4);

        let House = document.getElementById("P1House");
        House.removeEventListener('click', AddFH)
        House = document.getElementById("P2House");
        House.addEventListener('click', AddFH);

        let SmallS = document.getElementById("P1SmallS");
        SmallS.removeEventListener('click', AddSS)
        SmallS = document.getElementById("P2SmallS");
        SmallS.addEventListener('click', AddSS);

        let LargeS = document.getElementById("P1LargeS");
        LargeS.removeEventListener('click', AddLS)
        LargeS = document.getElementById("P2LargeS");
        LargeS.addEventListener('click', AddLS);

        let Yathzee = document.getElementById("P1Yathzee");
        Yathzee.removeEventListener('click', AddYathzee)
        Yathzee = document.getElementById("P2Yathzee");
        Yathzee.addEventListener('click', AddYathzee);

        let Chance = document.getElementById("P1Chance");
        Chance.removeEventListener('click', AddChance)
        Chance = document.getElementById("P2Chance");
        Chance.addEventListener('click', AddChance);

    }
    //Player 1's functions
    else {
        nextButton.innerHTML = "Switch the turn to Player 2!";
        currentPlayer = 0;

        let Aces = document.getElementById("P1Aces");
        Aces.addEventListener('click', AddOnes);
        Aces = document.getElementById("P2Aces");
        Aces.removeEventListener('click', AddOnes)

        let Twos = document.getElementById("P2Twos");
        Twos.removeEventListener('click', AddTwos)
        Twos = document.getElementById("P1Twos");
        Twos.addEventListener('click', AddTwos);

        let Threes = document.getElementById("P2Threes");
        Threes.removeEventListener('click', AddThrees)
        Threes = document.getElementById("P1Threes");
        Threes.addEventListener('click', AddThrees);

        let Fours = document.getElementById("P2Fours");
        Fours.removeEventListener('click', AddFours)
        Fours = document.getElementById("P1Fours");
        Fours.addEventListener('click', AddFours);

        let Fives = document.getElementById("P2Fives");
        Fives.removeEventListener('click', AddFives)
        Fives = document.getElementById("P1Fives");
        Fives.addEventListener('click', AddFives);

        let Sixes = document.getElementById("P2Sixes");
        Sixes.removeEventListener('click', AddSixes)
        Sixes = document.getElementById("P1Sixes");
        Sixes.addEventListener('click', AddSixes);

        let X3 = document.getElementById("P2X3");
        X3.removeEventListener('click', AddX3)
        X3 = document.getElementById("P1X3");
        X3.addEventListener('click', AddX3);

        let X4 = document.getElementById("P2X4");
        X4.removeEventListener('click', AddX4)
        X4 = document.getElementById("P1X4");
        X4.addEventListener('click', AddX4);

        let House = document.getElementById("P2House");
        House.removeEventListener('click', AddFH)
        House = document.getElementById("P1House");
        House.addEventListener('click', AddFH);

        let SmallS = document.getElementById("P2SmallS");
        SmallS.removeEventListener('click', AddSS)
        SmallS = document.getElementById("P1SmallS");
        SmallS.addEventListener('click', AddSS);

        let LargeS = document.getElementById("P2LargeS");
        LargeS.removeEventListener('click', AddLS)
        LargeS = document.getElementById("P1LargeS");
        LargeS.addEventListener('click', AddLS);

        let Yathzee = document.getElementById("P2Yathzee");
        Yathzee.removeEventListener('click', AddYathzee)
        Yathzee = document.getElementById("P1Yathzee");
        Yathzee.addEventListener('click', AddYathzee);

        let Chance = document.getElementById("P2Chance");
        Chance.removeEventListener('click', AddChance)
        Chance = document.getElementById("P1Chance");
        Chance.addEventListener('click', AddChance);
    }
}




let nextButton = document.querySelector(".nextButton");
nextButton.addEventListener('click', resetVariables);
nextButton.addEventListener('click', switchPlayer);


