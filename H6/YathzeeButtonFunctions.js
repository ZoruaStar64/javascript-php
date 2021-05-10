function P1AddOnes() {
    topPointsPlayer1 += ones;
    P1Top.innerHTML = topPointsPlayer1;
}

else if (currentPlayer === 1) {
    if (randomDiceRoll === 1) {
        ones += 1;
    }
    let P2Aces = document.getElementById("P2Aces")
    if (ones => 1) {
        P2Aces.value = '+ ' + ones + ' points';
        P2Aces.style.backgroundColor = "#ff7423";
    } else if (ones === 0) {
        P2Aces.value = '0 Points';
        P2Aces.style.backgroundColor = "#d04b03";
    }

    if (randomDiceRoll === 2) {
        twos += 1;
    }
    let P2Twos = document.getElementById("P2Twos")
    if (twos => 1) {
        P2Twos.value = '+ ' + (2 * twos) + ' points';
        P2Twos.style.backgroundColor = "#ff7423";
    } else if (twos === 0) {
        P2Twos.value = '0 Points';
        P2Twos.style.backgroundColor = "#d04b03";
    }

    if (randomDiceRoll === 3) {
        threes += 1;
    }
    let P2Threes = document.getElementById("P2Threes")
    if (threes => 1) {
        P2Threes.value = '+ ' + (3 * threes) + ' points';
        P2Threes.style.backgroundColor = "#ff7423";
    } else if (threes === 0) {
        P2Threes.value = '0 Points';
        P2Threes.style.backgroundColor = "#d04b03";
    }

    if (randomDiceRoll === 4) {
        fours += 1;
    }
    let P2Fours = document.getElementById("P2Fours")
    if (fours => 1) {
        P2Fours.value = '+ ' + (4 * fours) + ' points';
        P2Fours.style.backgroundColor = "#ff7423";
    } else if (fours === 0) {
        P2Fours.value = '0 Points';
        P2Fours.style.backgroundColor = "#d04b03";
    }

    if (randomDiceRoll === 5) {
        fives += 1;
    }
    let P2Fives = document.getElementById("P2Fives")
    if (fives => 1) {
        P2Fives.value = '+ ' + (5 * fives) + ' points';
        P2Fives.style.backgroundColor = "#ff7423";
    } else if (fives === 0) {
        P2Fives.value = '0 Points';
        P2Fives.style.backgroundColor = "#d04b03";
    }

    if (randomDiceRoll === 6) {
        sixes += 1;
    }
    let P2Sixes = document.getElementById("P2Sixes")
    if (sixes => 1) {
        P2Sixes.value = '+ ' + (6 * sixes) + ' points';
        P2Sixes.style.backgroundColor = "#ff7423";
    } else if (sixes === 0) {
        P2Sixes.value = '0 Points';
        P2Sixes.style.backgroundColor = "#d04b03";
    }

    //Part 2 Player 2
    //Three of a kind
    if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
        let P2X3 = document.getElementById("P2X3")
        P2X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
        P2X3.style.backgroundColor = "#ff7423";
    } else {
        P2X3.value = '+ 0 Points';
        P2X3.style.backgroundColor = "#d04b03";
    }

    //Four of a kind
    if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
        let P2X4 = document.getElementById("P2X4")
        P2X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
        P2X4.style.backgroundColor = "#ff7423";
    } else {
        P2X4.value = '+ 0 Points';
        P2X4.style.backgroundColor = "#d04b03";
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
                let P2House = document.getElementById("P2House")
                P2House.value = '+ 25 Points';
                P2House.style.backgroundColor = "#ff7423";
            } else {
                P2House.value = '+ 0 Points';
                P2House.style.backgroundColor = "#d04b03";
            }
        }
    }

    //Small Street
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        let P2SmallS = document.getElementById("P2SmallS")
        P2SmallS.value = '+ 30 Points';
        P2SmallS.style.backgroundColor = "#ff7423";
    } else {
        P2SmallS.value = '+ 0 Points';
        P2SmallS.style.backgroundColor = "#d04b03";
    }

    //Large Street
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        let P2LargeS = document.getElementById("P2LargeS")
        P2LargeS.value = '+ 40 Points';
        P2LargeS.style.backgroundColor = "#ff7423";
    } else {
        P2LargeS.value = '+ 0 Points';
        P2LargeS.style.backgroundColor = "#d04b03";
    }

    //Yathzee
    if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
        let P2Yathzee = document.getElementById("P2Yathzee")
        P2Yathzee.value = '+ 50 Points';
        P2Yathzee.style.backgroundColor = "#ff7423";
    } else {
        P2Yathzee.value = '+ 0 Points';
        P2Yathzee.style.backgroundColor = "#d04b03";
    }

    //Chance
    if (ones > 0 || twos > 0 || threes > 0 || fours > 0 || fives > 0 || sixes > 0) {
        let P2Chance = document.getElementById("P2Chance")
        P2Chance.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes)) + ' points';
        P2Chance.style.backgroundColor = "#ff7423";
    }
}

//Player 2 add functions
/*function P2AddOnes() {
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

function P2AddTwos() {
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

function P2AddThrees() {
    topPointsPlayer1 += (3 * threes);
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

function P2AddFours() {
    topPointsPlayer1 += (4 * fours);
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

function P2AddFives() {
    topPointsPlayer1 += (5 * fives);
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

function P2AddSixes() {
    topPointsPlayer1 += (6 * sixes);
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

function P2AddX3() {
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

function P2AddX4() {
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

function P2AddFH() {
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

function P2AddSS() {
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

function P2AddLS() {
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

function P2AddYathzee() {
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

function P2AddChance() {
    bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
    P2Bottom.innerHTML = bottomPointsPlayer2;
    totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
    P2Total.innerHTML = totalPointsPlayer2;
}*/

/*    let P2Aces = document.getElementById("P2Aces");
    P2Aces.addEventListener('click', P2AddOnes);

    let P2Twos = document.getElementById("P2Twos");
    P2Twos.addEventListener('click', P2AddTwos);

    let P2Threes = document.getElementById("P2Threes");
    P2Threes.addEventListener('click', P2AddThrees);

    let P2Fours = document.getElementById("P2Fours");
    P2Fours.addEventListener('click', P2AddFours);

    let P2Fives = document.getElementById("P2Fives");
    P2Fives.addEventListener('click', P2AddFives);

    let P2Sixes = document.getElementById("P2Sixes");
    P2Sixes.addEventListener('click', P2AddSixes);

    let P2X3 = document.getElementById("P2X3");
    P2X3.addEventListener('click', P2AddX3);

    let P2X4 = document.getElementById("P2X4");
    P2X4.addEventListener('click', P2AddX4);

    let P2House = document.getElementById("P2House");
    P2House.addEventListener('click', P2AddFH);

    let P2SmallS = document.getElementById("P2SmallS");
    P2SmallS.addEventListener('click', P2AddSS);

    let P2LargeS = document.getElementById("P2LargeS");
    P2LargeS.addEventListener('click', P2AddLS);

    let P2Yathzee = document.getElementById("P2Yathzee");
    P2Yathzee.addEventListener('click', P2AddYathzee);

    let P2Chance = document.getElementById("P2Chance");
    P2Chance.addEventListener('click', P2AddChance);*/
