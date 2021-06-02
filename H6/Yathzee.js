"use strict";

let buttonsPlayer1Clicked = 0; //if this is 13 and buttonsplayer2 is also 13 then the game ends
let buttonsPlayer2Clicked = 0; //and picks the winner with the higher Final Score
let rollsLeft = 3;
let diceNumbers = []; //vasthouden
let trueDiceNumbers = [null, null, null, null, null]; //vasthouden

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let doubles = false;
let triples = false;
let fullHouse = false;

//hier komen tering feel variabelen om de checken of iets true of false is
let P1One = false;
let P2One = false;
let P1Two = false;
let P2Two = false;
let P1Three = false;
let P2Three = false;
let P1Four = false;
let P2Four = false;
let P1Five = false;
let P2Five = false;
let P1Six = false;
let P2Six = false;
let P1ThreeX = false;
let P2ThreeX = false
let P1FourX = false;
let P2FourX = false;
let P1FH = false;
let P2FH = false;
let P1SS = false;
let P2SS = false;
let P1LS = false;
let P2LS = false;
let P1Y = false;
let P2Y = false;
let P1C = false;
let P2C = false;


let waitingForNextMove = true;

let topPointsPlayer1 = 0;
let bottomPointsPlayer1 = 0
let totalPointsPlayer1 = topPointsPlayer1 + bottomPointsPlayer1;

let topPointsPlayer2 = 0;
let bottomPointsPlayer2 = 0;
let totalPointsPlayer2 = topPointsPlayer2 + bottomPointsPlayer2;

let players = ["Player 1", "Player 2"];
let currentPlayer = 0;


//bij de roll functie kan het dan handig zijn om inplaats van 5 juist diceImages.length te doen
//of misschien een andere const/let maken die ook de diceimages in een vak houden en wanneer je klikt
//het daar weghaalt waardoor diceImages.length wel zou werken dan
const dice1Image = document.getElementById("diceOne");
const dice2Image = document.getElementById("diceTwo");
const dice3Image = document.getElementById("diceThree");
const dice4Image = document.getElementById("diceFour");
const dice5Image = document.getElementById("diceFive")
const diceImages = [dice1Image, dice2Image, dice3Image, dice4Image, dice5Image];

//wanneer een dice geklikt wordt verhoog dit getal
let dicesClickedNumber = 0;

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

function throwDice1() {
    dice1Image.style.border = "none";
    dicesClickedNumber -= 1;
    trueDiceNumbers[0] = null;
    diceImages[0] = dice1Image;
    dice1Image.addEventListener('click', keepDice1)
    dice1Image.removeEventListener('click', throwDice1)
}
function keepDice1() {
    dice1Image.style.border = "blue 3px solid";
    dicesClickedNumber += 1;
    trueDiceNumbers[0] = diceNumbers[0];
    diceImages[0] = null;
    dice1Image.addEventListener('click', throwDice1)
    dice1Image.removeEventListener('click', keepDice1)
}

function throwDice2() {
    dice2Image.style.border = "none";
    dicesClickedNumber -= 1;
    trueDiceNumbers[1] = null;
    diceImages[1] = dice2Image;
    dice2Image.addEventListener('click', keepDice2)
    dice2Image.removeEventListener('click', throwDice2)
}
function keepDice2() {
    dice2Image.style.border = "blue 3px solid";
    dicesClickedNumber += 1;
    trueDiceNumbers[1] = diceNumbers[1];
    diceImages[1] = null;
    dice2Image.addEventListener('click', throwDice2)
    dice2Image.removeEventListener('click', keepDice2)
}

function throwDice3() {
    dice3Image.style.border = "none";
    dicesClickedNumber -= 1;
    trueDiceNumbers[2] = null;
    diceImages[2] = dice3Image;
    dice3Image.addEventListener('click', keepDice3)
    dice3Image.removeEventListener('click', throwDice3)
}
function keepDice3() {
    dice3Image.style.border = "blue 3px solid";
    dicesClickedNumber += 1;
    trueDiceNumbers[2] = diceNumbers[2];
    diceImages[2] = null;
    dice3Image.addEventListener('click', throwDice3)
    dice3Image.removeEventListener('click', keepDice3)
}

function throwDice4() {
    dice4Image.style.border = "none";
    dicesClickedNumber -= 1;
    trueDiceNumbers[3] = null;
    diceImages[3] = dice4Image;
    dice4Image.addEventListener('click', keepDice4)
    dice4Image.removeEventListener('click', throwDice4)
}
function keepDice4() {
    dice4Image.style.border = "blue 3px solid";
    dicesClickedNumber += 1;
    trueDiceNumbers[3] = diceNumbers[3];
    diceImages[3] = null;
    dice4Image.addEventListener('click', throwDice4)
    dice4Image.removeEventListener('click', keepDice4)
}

function throwDice5() {
    dice5Image.style.border = "none";
    dicesClickedNumber -= 1;
    trueDiceNumbers[4] = null;
    diceImages[4] = dice5Image;
    dice5Image.addEventListener('click', keepDice5)
    dice5Image.removeEventListener('click', throwDice5)
}
function keepDice5() {
    dice5Image.style.border = "blue 3px solid";
    dicesClickedNumber += 1;
    trueDiceNumbers[4] = diceNumbers[4];
    diceImages[4] = null;
    dice5Image.addEventListener('click', throwDice5)
    dice5Image.removeEventListener('click', keepDice5)
}


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

    for(let counter = 0; counter < 5; counter++){
        if(trueDiceNumbers[counter] === 1){
            ones++;
        }else if(trueDiceNumbers[counter] === 2){
            twos++;
        }
        else if(trueDiceNumbers[counter] === 3){
            threes++;
        }
        else if(trueDiceNumbers[counter] === 4){
            fours++;
        }
        else if(trueDiceNumbers[counter] === 5){
            fives++;
        }
        else if(trueDiceNumbers[counter] === 6){
            sixes++;
        }
    }


    let teller = 0;
    if (rollsLeft > 0) {
        //array vullen
        diceNumbers = [];
        let randomDiceRoll = 0;
        for (teller; teller < 5; teller++) {
            if (diceImages[0] === null && teller === 0) {
                diceNumbers.push(null);
                continue;
            }
            if (diceImages[1] === null && teller === 1) {
                diceNumbers.push(null);
                continue;
            }
            if (diceImages[2] === null && teller === 2) {
                diceNumbers.push(null);
                continue;
            }
            if (diceImages[3] === null && teller === 3) {
                diceNumbers.push(null);
                continue;
            }
            if (diceImages[4] === null && teller === 4) {
                diceNumbers.push(null);
                continue;
            }
            else {
                randomDiceRoll = Math.floor(Math.random() * 6 + 1);
                diceNumbers.push(randomDiceRoll);
                diceImages[teller].src = "../img/dice" + randomDiceRoll + ".jpg"; //template literal
                //om de beurt vullen
            }

            if (randomDiceRoll === 1) {
                ones += 1;
            }

            let Aces = currentPlayer === 0 ? document.getElementById("P1Aces") : document.getElementById("P2Aces");
            if (ones => 1) {
                Aces.value = '+ ' + ones;
                Aces.style.backgroundColor = "#ff7423";
            } else if (ones === 0) {
                Aces.value = '+ 0';
                Aces.style.backgroundColor = "#d04b03";
            }


            if (randomDiceRoll === 2) {
                twos += 1;
            }
            let Twos = currentPlayer === 0 ? document.getElementById("P1Twos") : document.getElementById("P2Twos");
            if (twos => 1) {
                Twos.value = '+ ' + (2 * twos);
                Twos.style.backgroundColor = "#ff7423";
            } else if (twos === 0) {
                Twos.value = '+ 0';
                Twos.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 3) {
                threes += 1;
            }
            let Threes = currentPlayer === 0 ? document.getElementById("P1Threes") : document.getElementById("P2Threes");
            if (threes => 1) {
                Threes.value = '+ ' + (3 * threes);
                Threes.style.backgroundColor = "#ff7423";
            } else if (threes === 0) {
                Threes.value = '+ 0';
                Threes.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 4) {
                fours += 1;
            }
            let Fours = currentPlayer === 0 ? document.getElementById("P1Fours") : document.getElementById("P2Fours");
            if (fours => 1) {
                Fours.value = '+ ' + (4 * fours);
                Fours.style.backgroundColor = "#ff7423";
            } else if (fours === 0) {
                Fours.value = '+ 0';
                Fours.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 5) {
                fives += 1;
            }
            let Fives = currentPlayer === 0 ? document.getElementById("P1Fives") : document.getElementById("P2Fives");
            if (fives => 1) {
                Fives.value = '+ ' + (5 * fives);
                Fives.style.backgroundColor = "#ff7423";
            } else if (fives === 0) {
                Fives.value = '+ 0';
                Fives.style.backgroundColor = "#d04b03";
            }

            if (randomDiceRoll === 6) {
                sixes += 1;
            }
            let Sixes = currentPlayer === 0 ? document.getElementById("P1Sixes") : document.getElementById("P2Sixes");
            if (sixes => 1) {
                Sixes.value = '+ ' + (6 * sixes);
                Sixes.style.backgroundColor = "#ff7423";
            } else if (sixes === 0) {
                Sixes.value = '+ 0';
                Sixes.style.backgroundColor = "#d04b03";
            }

            //Part 2
            //Three of a kind
            let X3 = currentPlayer === 0 ? document.getElementById("P1X3") : document.getElementById("P2X3");
            if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {

                X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
                X3.style.backgroundColor = "#ff7423";
            } else {
                X3.value = '+ 0';
                X3.style.backgroundColor = "#d04b03";
            }

            //Four of a kind
            let X4 = currentPlayer === 0 ? document.getElementById("P1X4") : document.getElementById("P2X4");
            if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {

                X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
                X4.style.backgroundColor = "#ff7423";
            } else {
                X4.value = '+ 0';
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

                House.value = '+ 25';
                House.style.backgroundColor = "#ff7423";
            } else if (fullHouse === false) {
                House.value = '+ 0';
                House.style.backgroundColor = "#d04b03";
            }



                //Small Street
            let SmallS = currentPlayer === 0 ? document.getElementById("P1SmallS") : document.getElementById("P2SmallS");
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    threes > 0 && fours > 0 && fives > 0 && sixes > 0) {

                    SmallS.value = '+ 30';
                    SmallS.style.backgroundColor = "#ff7423";
                } else {
                    SmallS.value = '+ 0';
                    SmallS.style.backgroundColor = "#d04b03";
                }

                //Large Street
            let LargeS = currentPlayer === 0 ? document.getElementById("P1LargeS") : document.getElementById("P2LargeS");
                if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
                    twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {

                    LargeS.value = '+ 40';
                    LargeS.style.backgroundColor = "#ff7423";
                } else {
                    LargeS.value = '+ 0';
                    LargeS.style.backgroundColor = "#d04b03";
                }

                //Yathzee
            let Yathzee = currentPlayer === 0 ? document.getElementById("P1Yathzee") : document.getElementById("P2Yathzee");
                if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {

                    Yathzee.value = '+ 50';
                    Yathzee.style.backgroundColor = "#ff7423";
                } else {
                    Yathzee.value = '+ 0';
                    Yathzee.style.backgroundColor = "#d04b03";
                }

                //Chance
            let Chance = currentPlayer === 0 ? document.getElementById("P1Chance") : document.getElementById("P2Chance");
                if (ones > 0 || twos > 0 || threes > 0 || fours > 0 || fives > 0 || sixes > 0) {

                    Chance.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
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

        dice1Image.addEventListener('click', keepDice1);
        dice2Image.addEventListener('click', keepDice2);
        dice3Image.addEventListener('click', keepDice3);
        dice4Image.addEventListener('click', keepDice4);
        dice5Image.addEventListener('click', keepDice5);
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

//eventlistener givers
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


//This gives the rollbutton it's function at the start of the game
let rollButton = document.querySelector(".rollButton");
rollButton.addEventListener("click", rollDices);

//Player add functions
function AddOnes() {
    if (currentPlayer === 0) {
        let P1AcesText = document.getElementById("P1AcesText");
        P1AcesText.innerHTML = "" + ones;
        P1One = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
    else {
        let P2AcesText = document.getElementById("P2AcesText");
        P2AcesText.innerHTML = "" + ones;
        P2One = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddTwos() {
    if (currentPlayer === 0) {
        let P1TwosText = document.getElementById("P1TwosText");
        P1TwosText.innerHTML = "" + (2 * twos);
        P1Two = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    } else {
        let P2TwosText = document.getElementById("P2TwosText");
        P2TwosText.innerHTML = "" + (2 * twos);
        P2Two = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddThrees() {
    if (currentPlayer === 0) {
        let P1ThreesText = document.getElementById("P1ThreesText");
        P1ThreesText.innerHTML = "" + (3 * threes);
        P1Three = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
    else {
        let P2ThreesText = document.getElementById("P2ThreesText");
        P2ThreesText.innerHTML = "" + (3 * threes);
        P2Three = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddFours() {
    if (currentPlayer === 0) {
        let P1FoursText = document.getElementById("P1FoursText");
        P1FoursText.innerHTML = "" + (4 * fours);
        P1Four = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
}
    else {
        let P2FoursText = document.getElementById("P2FoursText");
        P2FoursText.innerHTML = "" + (4 * fours);
        P2Four = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddFives() {
    if (currentPlayer === 0) {
        let P1FivesText = document.getElementById("P1FivesText");
        P1FivesText.innerHTML = "" + (5 * fives);
        P1Five = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
}
    else {
        let P2FivesText = document.getElementById("P2FivesText");
        P2FivesText.innerHTML = "" + (5 * fives);
        P2Five = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddSixes() {
    if (currentPlayer === 0) {
        let P1SixesText = document.getElementById("P1SixesText");
        P1SixesText.innerHTML = "" + (6 * sixes);
        P1Six = true;
        buttonsPlayer1Clicked += 1;
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
        eventListenerRemovalForPointButtons()
}
    else {
        let P2SixesText = document.getElementById("P2SixesText");
        P2SixesText.innerHTML = "" + (6 * sixes);
        P2Six = true;
        buttonsPlayer2Clicked += 1;
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
        eventListenerRemovalForPointButtons()
    }
}

function AddX3() {
    if (currentPlayer === 0) {
        let P1X3Text = document.getElementById("P1X3Text");
        P1ThreeX = true;
        buttonsPlayer1Clicked += 1;
        if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
            bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1X3Text.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1X3Text.innerHTML = "0";

        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2X3Text = document.getElementById("P2X3Text");
        P2ThreeX = true;
        buttonsPlayer2Clicked += 1;
        if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
            bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2X3Text.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));

        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2X3Text.innerHTML = "0";

        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddX4() {
    if (currentPlayer === 0) {
        let P1X4Text = document.getElementById("P1X4Text");
        P1FourX = true;
        buttonsPlayer1Clicked += 1;
        if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
            bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1X4Text.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));

        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1X4Text.innerHTML = "0";

        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2X4Text = document.getElementById("P2X4Text");

        P2FourX = true;
        buttonsPlayer2Clicked += 1;
        if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
            bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2X4Text.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));

        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2X4Text.innerHTML = "0";

        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddFH() {
    if (currentPlayer === 0) {
        let P1HouseText = document.getElementById("P1HouseText");

        P1FH = true;
        buttonsPlayer1Clicked += 1;
        if (fullHouse === true) {
            bottomPointsPlayer1 += 25;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1HouseText.innerHTML = "25";
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1HouseText.innerHTML = "0";
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2HouseText = document.getElementById("P2HouseText");

        P2FH = true;
        buttonsPlayer2Clicked += 1;
        if (fullHouse === true) {
            bottomPointsPlayer2 += 25;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2HouseText.innerHTML = "25";
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P1HouseText.innerHTML = "0";
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddSS() {
    if (currentPlayer === 0) {
        let P1SSText = document.getElementById("P1SSText");

        P1SS = true;
        buttonsPlayer1Clicked += 1;
        SmallS.style.backgroundColor = '#9d3700';
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer1 += 30;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1SSText.innerHTML = "30";
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1SSText.innerHTML = "0";
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2SSText = document.getElementById("P2SSText");

        P2SS = true;
        buttonsPlayer2Clicked += 1;
        SmallS.style.backgroundColor = '#9d3700';
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer2 += 30;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2SSText.innerHTML = "30";
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2SSText.innerHTML = "0";
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddLS() {
    if (currentPlayer === 0) {
        let P1LSText = document.getElementById("P1LSText");

        P1LS = true;
        buttonsPlayer1Clicked += 1;
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer1 += 40;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1LSText.innerHTML = "40";
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1LSText.innerHTML = "0";
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2LSText = document.getElementById("P2LSText");
        P2LS = true;
        buttonsPlayer2Clicked += 1;
        if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
            twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
            bottomPointsPlayer2 += 40;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2LSText.innerHTML = "40";
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2LSText.innerHTML = "0";
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddYathzee() {
    if (currentPlayer === 0) {
        let P1YathzeeText = document.getElementById("P1YathzeeText");
        P1Y = true;
        buttonsPlayer1Clicked += 1;
        if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
            bottomPointsPlayer1 += 50;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1YathzeeText.innerHTML = "50";
        } else {
            bottomPointsPlayer1 += 0;
            P1Bottom.innerHTML = bottomPointsPlayer1;
            P1YathzeeText.innerHTML = "0";
        }
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2YathzeeText = document.getElementById("P2YathzeeText");
        P2Y = true;
        buttonsPlayer2Clicked += 1;
        if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
            bottomPointsPlayer2 += 50;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2YathzeeText.innerHTML = "50";
        }
        else {
            bottomPointsPlayer2 += 0;
            P2Bottom.innerHTML = bottomPointsPlayer2;
            P2YathzeeText.innerHTML = "0";
        }
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

function AddChance() {
    if (currentPlayer === 0) {
        let P1ChanceText = document.getElementById("P1ChanceText");
        P1ChanceText.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P1C = true;
        buttonsPlayer1Clicked += 1;
        bottomPointsPlayer1 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P1Bottom.innerHTML = bottomPointsPlayer1;
        totalPointsPlayer1 = (topPointsPlayer1 + bottomPointsPlayer1)
        P1Total.innerHTML = totalPointsPlayer1;
        eventListenerRemovalForPointButtons()
    } else {
        let P2ChanceText = document.getElementById("P2ChanceText");
        P2ChanceText.innerHTML = "" + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P2C = true;
        buttonsPlayer2Clicked += 1;
        bottomPointsPlayer2 += ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        P2Bottom.innerHTML = bottomPointsPlayer2;
        totalPointsPlayer2 = (topPointsPlayer2 + bottomPointsPlayer2)
        P2Total.innerHTML = totalPointsPlayer2;
        eventListenerRemovalForPointButtons()
    }
}

//This makes it display the rolls at the start of the game
if (rollsLeft === 3) {
    rollButton.innerHTML = "Rolls left = 3"
    rollButton.style.color = "green"
}


//This is suposed to just reset everything
//But i think the button with this function just simply refreshes the page
//so i think this is useless?..
function resetVariables() {
    rollsLeft = 3;
    rollButton.addEventListener("click", rollDices);
    rollButton.innerHTML = "Rolls left = 3"
    rollButton.style.color = "green"
    //diceImages.src = "../img/dice0.jpg"
    diceNumbers = []
   // console.log(diceNumbers);
    ones = 0;
    let Aces = currentPlayer === 0 ? document.getElementById("P1Aces") : document.getElementById("P2Aces");
    if (ones => 1) {
        Aces.value = '+ ' + ones;
        Aces.style.backgroundColor = "#ff7423";
    } else if (ones === 0) {
        Aces.value = '+ 0';
        Aces.style.backgroundColor = "#d04b03";
    }

        twos = 0;
    let Twos = currentPlayer === 0 ? document.getElementById("P1Twos") : document.getElementById("P2Twos");
    if (twos => 1) {
        Twos.value = '+ ' + (2 * twos);
        Twos.style.backgroundColor = "#ff7423";
    } else if (twos === 0) {
        Twos.value = '+ 0';
        Twos.style.backgroundColor = "#d04b03";
    }

        threes = 0;
    let Threes = currentPlayer === 0 ? document.getElementById("P1Threes") : document.getElementById("P2Threes");
    if (threes => 1) {
        Threes.value = '+ ' + (3 * threes);
        Threes.style.backgroundColor = "#ff7423";
    } else if (threes === 0) {
        Threes.value = '+ 0';
        Threes.style.backgroundColor = "#d04b03";
    }

        fours = 0;
    let Fours = currentPlayer === 0 ? document.getElementById("P1Fours") : document.getElementById("P2Fours");
    if (fours => 1) {
        Fours.value = '+ ' + (4 * fours);
        Fours.style.backgroundColor = "#ff7423";
    } else if (fours === 0) {
        Fours.value = '+ 0';
        Fours.style.backgroundColor = "#d04b03";
    }

        fives = 0;
    let Fives = currentPlayer === 0 ? document.getElementById("P1Fives") : document.getElementById("P2Fives");
    if (fives => 1) {
        Fives.value = '+ ' + (5 * fives);
        Fives.style.backgroundColor = "#ff7423";
    } else if (fives === 0) {
        Fives.value = '+ 0';
        Fives.style.backgroundColor = "#d04b03";
    }

        sixes = 0;
    let Sixes = currentPlayer === 0 ? document.getElementById("P1Sixes") : document.getElementById("P2Sixes");
    if (sixes => 1) {
        Sixes.value = '+ ' + (6 * sixes);
        Sixes.style.backgroundColor = "#ff7423";
    } else if (sixes === 0) {
        Sixes.value = '+ 0';
        Sixes.style.backgroundColor = "#d04b03";
    }

    //Part 2
    //Three of a kind
    let X3 = currentPlayer === 0 ? document.getElementById("P1X3") : document.getElementById("P2X3");
    if (ones > 2 || twos > 2 || threes > 2 || fours > 2 || fives > 2 || sixes > 2) {
        X3.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        X3.style.backgroundColor = "#ff7423";
    } else {
        X3.value = '+ 0';
        X3.style.backgroundColor = "#d04b03";
    }

    //Four of a kind
    let X4 = currentPlayer === 0 ? document.getElementById("P1X4") : document.getElementById("P2X4");
    if (ones > 3 || twos > 3 || threes > 3 || fours > 3 || fives > 3 || sixes > 3) {
        X4.value = '+ ' + ((ones) + (2 * twos) + (3 * threes) + (4 * fours) + (5 * fives) + (6 * sixes));
        X4.style.backgroundColor = "#ff7423";
    } else {
        X4.value = '+ 0';
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

        House.value = '+ 25';
        House.style.backgroundColor = "#ff7423";
    } else if (fullHouse === false) {
        House.value = '+ 0';
        House.style.backgroundColor = "#d04b03";
    }

    //Small Street
    let SmallS = currentPlayer === 0 ? document.getElementById("P1SmallS") : document.getElementById("P2SmallS");
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        SmallS.value = '+ 30';
        SmallS.style.backgroundColor = "#ff7423";
    } else {
        SmallS.value = '+ 0';
        SmallS.style.backgroundColor = "#d04b03";
    }

    //Large Street
    let LargeS = currentPlayer === 0 ? document.getElementById("P1LargeS") : document.getElementById("P2LargeS");
    if (ones > 0 && twos > 0 && threes > 0 && fours > 0 && fives > 0 ||
        twos > 0 && threes > 0 && fours > 0 && fives > 0 && sixes > 0) {
        LargeS.value = '+ 40';
        LargeS.style.backgroundColor = "#ff7423";
    } else {
        LargeS.value = '+ 0';
        LargeS.style.backgroundColor = "#d04b03";
    }

    //Yathzee
    let Yathzee = currentPlayer === 0 ? document.getElementById("P1Yathzee") : document.getElementById("P2Yathzee");
    if (ones === 5 || twos === 5 || threes === 5 || fours === 5 || fives === 5 || sixes === 5) {
        Yathzee.value = '+ 50';
        Yathzee.style.backgroundColor = "#ff7423";
    } else {
        Yathzee.value = '+ 0';
        Yathzee.style.backgroundColor = "#d04b03";
    }

    //Chance
    let Chance = currentPlayer === 0 ? document.getElementById("P1Chance") : document.getElementById("P2Chance");
        Chance.value = '+ 0';
        Chance.style.backgroundColor = "#ff7423";

}

//This makes the currentturn box display that it's player 1's turn
let currentTurn = document.getElementById('currentTurn')
currentTurn.innerHTML = "Player 1's turn";

//This removes eventlisteners on all addbuttons so you cant constantly up your score by repeat clicking
function eventListenerRemovalForPointButtons() {
    WinningPlayer();
    if (currentPlayer === 0) {
        let Aces = document.getElementById("P1Aces");
        Aces.style.backgroundColor = '#9d3700';
        Aces.removeEventListener('click', AddOnes)

        let Twos = document.getElementById("P1Twos");
        Twos.style.backgroundColor = '#9d3700';
        Twos.removeEventListener('click', AddTwos)

        let Threes = document.getElementById("P1Threes");
        Threes.style.backgroundColor = '#9d3700';
        Threes.removeEventListener('click', AddThrees)

        let Fours = document.getElementById("P1Fours");
        Fours.style.backgroundColor = '#9d3700';
        Fours.removeEventListener('click', AddFours)

        let Fives = document.getElementById("P1Fives");
        Fives.style.backgroundColor = '#9d3700';
        Fives.removeEventListener('click', AddFives)

        let Sixes = document.getElementById("P1Sixes");
        Sixes.style.backgroundColor = '#9d3700';
        Sixes.removeEventListener('click', AddSixes)

        let X3 = document.getElementById("P1X3");
        X3.style.backgroundColor = '#9d3700';
        X3.removeEventListener('click', AddX3)

        let X4 = document.getElementById("P1X4");
        X4.style.backgroundColor = '#9d3700';
        X4.removeEventListener('click', AddX4)

        let House = document.getElementById("P1House");
        House.style.backgroundColor = '#9d3700';
        House.removeEventListener('click', AddFH)

        let SmallS = document.getElementById("P1SmallS");
        SmallS.style.backgroundColor = '#9d3700';
        SmallS.removeEventListener('click', AddSS)

        let LargeS = document.getElementById("P1LargeS");
        LargeS.style.backgroundColor = '#9d3700';
        LargeS.removeEventListener('click', AddLS)

        let Yathzee = document.getElementById("P1Yathzee");
        Yathzee.style.backgroundColor = '#9d3700';
        Yathzee.removeEventListener('click', AddYathzee)

        let Chance = document.getElementById("P1Chance");
        Chance.style.backgroundColor = '#9d3700';
        Chance.removeEventListener('click', AddChance)
    }
    else {
        let Aces = document.getElementById("P2Aces");
        Aces.style.backgroundColor = '#9d3700';
        Aces.removeEventListener('click', AddOnes)

        let Twos = document.getElementById("P2Twos");
        Twos.style.backgroundColor = '#9d3700';
        Twos.removeEventListener('click', AddTwos)

        let Threes = document.getElementById("P2Threes");
        Threes.style.backgroundColor = '#9d3700';
        Threes.removeEventListener('click', AddThrees)

        let Fours = document.getElementById("P2Fours");
        Fours.style.backgroundColor = '#9d3700';
        Fours.removeEventListener('click', AddFours)

        let Fives = document.getElementById("P2Fives");
        Fives.style.backgroundColor = '#9d3700';
        Fives.removeEventListener('click', AddFives)

        let Sixes = document.getElementById("P2Sixes");
        Sixes.style.backgroundColor = '#9d3700';
        Sixes.removeEventListener('click', AddSixes)

        let X3 = document.getElementById("P2X3");
        X3.style.backgroundColor = '#9d3700';
        X3.removeEventListener('click', AddX3)

        let X4 = document.getElementById("P2X4");
        X4.style.backgroundColor = '#9d3700';
        X4.removeEventListener('click', AddX4)

        let House = document.getElementById("P2House");
        House.style.backgroundColor = '#9d3700';
        House.removeEventListener('click', AddFH)

        let SmallS = document.getElementById("P2SmallS");
        SmallS.style.backgroundColor = '#9d3700';
        SmallS.removeEventListener('click', AddSS)

        let LargeS = document.getElementById("P2LargeS");
        LargeS.style.backgroundColor = '#9d3700';
        LargeS.removeEventListener('click', AddLS)

        let Yathzee = document.getElementById("P2Yathzee");
        Yathzee.style.backgroundColor = '#9d3700';
        Yathzee.removeEventListener('click', AddYathzee)

        let Chance = document.getElementById("P2Chance");
        Chance.style.backgroundColor = '#9d3700';
        Chance.removeEventListener('click', AddChance)
    }
}

//The function that decides who wins
let winner = document.getElementById("Winner");
winner.innerHTML = "Dunno how you're seeing this but you shouldn't";
function WinningPlayer() {
    if (buttonsPlayer1Clicked + buttonsPlayer2Clicked === 26) {
        let winBox = document.getElementById("winBox");
        let winner = document.getElementById("Winner")
        winBox.style.display = 'Block';
        rollButton.removeEventListener('click', rollDices);
        nextButton.removeEventListener('click', switchPlayer);
        if (totalPointsPlayer1 > totalPointsPlayer2) {
            winner.innerHTML = "Congrats Player 1! <br> You won!";
        } else if (totalPointsPlayer2 > totalPointsPlayer1) {
            winner.innerHTML = "Congrats Player 2! <br> You won!";
        } else {
            winner.innerHTML = "Huh didn't expect this <br> " +
                "You two got the exact same score <br>" +
                "or maybe something went wrong <br>" +
                "either way congrats on seeing this message";
        }
    }
}


//Nextbutton's function
function switchPlayer() {
    throwDice1();
    throwDice2();
    throwDice3();
    throwDice4();
    throwDice5();
    dice1Image.removeEventListener('click', keepDice1)
    dice2Image.removeEventListener('click', keepDice2)
    dice3Image.removeEventListener('click', keepDice3)
    dice4Image.removeEventListener('click', keepDice4)
    dice5Image.removeEventListener('click', keepDice5)
    let nextButton = document.querySelector(".nextButton");
    if (currentPlayer === 0) {
        nextButton.innerHTML = "Switch the turn to Player 1!";
        currentTurn.innerHTML = "Player 2's turn";
        currentPlayer = 1;

        //Player 2's functions
        let Aces = document.getElementById("P1Aces");
        Aces.removeEventListener('click', AddOnes)
        if (P2One !== true) {
            Aces = document.getElementById("P2Aces");
            Aces.addEventListener('click', AddOnes);
        }

        let Twos = document.getElementById("P1Twos");
        Twos.removeEventListener('click', AddTwos)
        if (P2Two !== true) {
            Twos = document.getElementById("P2Twos");
            Twos.addEventListener('click', AddTwos);
        }

        let Threes = document.getElementById("P1Threes");
        Threes.removeEventListener('click', AddThrees)
        if (P2Three !== true) {
            Threes = document.getElementById("P2Threes");
            Threes.addEventListener('click', AddThrees);
        }

        let Fours = document.getElementById("P1Fours");
        Fours.removeEventListener('click', AddFours)
        if (P2Four !== true) {
            Fours = document.getElementById("P2Fours");
            Fours.addEventListener('click', AddFours);
        }

        let Fives = document.getElementById("P1Fives");
        Fives.removeEventListener('click', AddFives)
        if (P2Five !== true) {
            Fives = document.getElementById("P2Fives");
            Fives.addEventListener('click', AddFives);
        }

        let Sixes = document.getElementById("P1Sixes");
        Sixes.removeEventListener('click', AddSixes)
        if (P2Six !== true) {
            Sixes = document.getElementById("P2Sixes");
            Sixes.addEventListener('click', AddSixes);
        }

        let X3 = document.getElementById("P1X3");
        X3.removeEventListener('click', AddX3)
        if (P2ThreeX !== true) {
            X3 = document.getElementById("P2X3");
            X3.addEventListener('click', AddX3);
        }

        let X4 = document.getElementById("P1X4");
        X4.removeEventListener('click', AddX4)
        if (P2FourX !== true) {
            X4 = document.getElementById("P2X4");
            X4.addEventListener('click', AddX4);
        }

        let House = document.getElementById("P1House");
        House.removeEventListener('click', AddFH)
        if (P2FH !== true) {
            House = document.getElementById("P2House");
            House.addEventListener('click', AddFH);
        }

        let SmallS = document.getElementById("P1SmallS");
        SmallS.removeEventListener('click', AddSS)
        if (P2SS !== true) {
            SmallS = document.getElementById("P2SmallS");
            SmallS.addEventListener('click', AddSS);
        }

        let LargeS = document.getElementById("P1LargeS");
        LargeS.removeEventListener('click', AddLS)
        if (P2LS !== true) {
            LargeS = document.getElementById("P2LargeS");
            LargeS.addEventListener('click', AddLS);
        }

        let Yathzee = document.getElementById("P1Yathzee");
        Yathzee.removeEventListener('click', AddYathzee)
        if (P2Y !== true) {
            Yathzee = document.getElementById("P2Yathzee");
            Yathzee.addEventListener('click', AddYathzee);
        }

        let Chance = document.getElementById("P1Chance");
        Chance.removeEventListener('click', AddChance)
        if (P2C !== true) {
            Chance = document.getElementById("P2Chance");
            Chance.addEventListener('click', AddChance);
        }
    }
    //Player 1's functions
    else {
        nextButton.innerHTML = "Switch the turn to Player 2!";
        currentTurn.innerHTML = "Player 1's turn";
        currentPlayer = 0;


        let Aces = document.getElementById("P2Aces");
        Aces.removeEventListener('click', AddOnes)
        if (P1One !== true) {
            let Aces = document.getElementById("P1Aces");
            Aces.addEventListener('click', AddOnes);
        }

        let Twos = document.getElementById("P2Twos");
        Twos.removeEventListener('click', AddTwos)
        if (P1Two !== true) {
            Twos = document.getElementById("P1Twos");
            Twos.addEventListener('click', AddTwos);
        }

        let Threes = document.getElementById("P2Threes");
        Threes.removeEventListener('click', AddThrees)
        if (P1Three !== true) {
            Threes = document.getElementById("P1Threes");
            Threes.addEventListener('click', AddThrees);
        }

        let Fours = document.getElementById("P2Fours");
        Fours.removeEventListener('click', AddFours)
        if (P1Four !== true) {
            Fours = document.getElementById("P1Fours");
            Fours.addEventListener('click', AddFours);
        }

        let Fives = document.getElementById("P2Fives");
        Fives.removeEventListener('click', AddFives)
        if (P1Five !== true) {
            Fives = document.getElementById("P1Fives");
            Fives.addEventListener('click', AddFives);
        }

        let Sixes = document.getElementById("P2Sixes");
        Sixes.removeEventListener('click', AddSixes)
        if (P1Six !== true) {
            Sixes = document.getElementById("P1Sixes");
            Sixes.addEventListener('click', AddSixes);
        }

        let X3 = document.getElementById("P2X3");
        X3.removeEventListener('click', AddX3)
        if (P1ThreeX !== true) {
            X3 = document.getElementById("P1X3");
            X3.addEventListener('click', AddX3);
        }

        let X4 = document.getElementById("P2X4");
        X4.removeEventListener('click', AddX4)
        if (P1FourX !== true) {
            X4 = document.getElementById("P1X4");
            X4.addEventListener('click', AddX4);
        }

        let House = document.getElementById("P2House");
        House.removeEventListener('click', AddFH)
        if (P1FH !== true) {
            House = document.getElementById("P1House");
            House.addEventListener('click', AddFH);
        }

        let SmallS = document.getElementById("P2SmallS");
        SmallS.removeEventListener('click', AddSS)
        if (P1SS !== true) {
            SmallS = document.getElementById("P1SmallS");
            SmallS.addEventListener('click', AddSS);
        }

        let LargeS = document.getElementById("P2LargeS");
        LargeS.removeEventListener('click', AddLS)
        if (P1LS !== true) {
            LargeS = document.getElementById("P1LargeS");
            LargeS.addEventListener('click', AddLS);
        }

        let Yathzee = document.getElementById("P2Yathzee");
        Yathzee.removeEventListener('click', AddYathzee)
        if (P1Y !== true) {
            Yathzee = document.getElementById("P1Yathzee");
            Yathzee.addEventListener('click', AddYathzee);
        }

        let Chance = document.getElementById("P2Chance");
        Chance.removeEventListener('click', AddChance)
        if (P1C !== true) {
            Chance = document.getElementById("P1Chance");
            Chance.addEventListener('click', AddChance);
        }
    }
    if (buttonsPlayer1Clicked && buttonsPlayer2Clicked === 25) {
        nextButton.addEventListener('click', WinningPlayer);
    }
}
let nextButton = document.querySelector(".nextButton");
nextButton.addEventListener('click', resetVariables);
nextButton.addEventListener('click', switchPlayer);


//Rulesbutton functions
let rulesButton = document.querySelector(".rulesButton");
let rulesTextBox = document.getElementById("rulesTextBox")
function showRules() {
    if (rulesTextBox.style.display === 'none') {
        rulesTextBox.style.display = 'block';
    }
}
let exitRulesButton = document.getElementById("rulesExitBox")
function exitRules() {
    if (rulesTextBox.style.display === 'block') {
        rulesTextBox.style.display = 'none';
    }
}
exitRulesButton.addEventListener('click', exitRules);
rulesButton.addEventListener('click', showRules);


//Infobutton functions
let infoButton = document.querySelector(".infoButton");
let infoTextBox = document.getElementById("infoTextBox");
function showInfo() {
    if (infoTextBox.style.display === 'none') {
        infoTextBox.style.display = 'block';
    }
}

let exitInfoButton = document.getElementById("infoExitBox")
function exitInfo() {
    if (infoTextBox.style.display === 'block') {
        infoTextBox.style.display = 'none';
    }
}
exitInfoButton.addEventListener('click', exitInfo);
infoButton.addEventListener('click', showInfo);



