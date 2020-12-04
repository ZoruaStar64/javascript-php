// Initializing of the variables
let winner = null;
let movesMade = 0;
let lastBlockClicked = null;
let waitingForNextMove = true;
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let players = ["Player 1", "Player 2"];
let flippedCards = [null, null];
let currentPlayer = Math.floor(Math.random() * 2);
showWhichPlayer();
showScore();

// makes cards react to clicks
let reactToFirstClick = function() {
    if (this.id !== lastBlockClicked && waitingForNextMove) {
        movesMade++;
        lastBlockClicked = this.id;
        flipCard(this.id);
        if (movesMade === 2) {
            checkForMatch();
            resetVariables();
        }
    }
};

// function to react to second click
let reactToSecondClick = function() {
    let allBlocks = document.getElementsByClassName("item");
    for (let j = 0; j < allBlocks.length; j++){
        if (imageArray[j] !== null) {
            allBlocks[j].style.backgroundImage = "url(../img/imageDown.png)";
        }
    }
    nextButton.style.display = 'none';
    movesMade = 0;
    lastBlockClicked = null;
    waitingForNextMove = true;
    switchPlayer();
    showWhichPlayer();
};

// Shuffle the newly created deck (which also gets created in this)
let imageArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
shuffleDeck(imageArray);
for (var i = 1; i <= 18; i++) {
    let block = document.createElement("div");
    block.className = "item";
    block.id = i;
    block.addEventListener('click', reactToFirstClick);
    block.style.backgroundImage = "url(../img/imageDown.png)";
    document.getElementById("gridcontainer").appendChild(block);
}

function flipCard(id) {
    let block = document.getElementById(id);
    block.style.background = 'url("../img/Memory0' + imageArray[id - 1] + '.png")';
    if (movesMade === 1) {
        flippedCards[0] = imageArray[id - 1];
    } else {
        flippedCards[1] = imageArray[id - 1];
    }
    console.log(flippedCards.toString());
}

function shuffleDeck(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
    let random = Math.floor(Math.random() * imageArray.length);
    let temp = imageArray[i];
    imageArray[i] = imageArray[random];
    imageArray[random] = temp;
    }
}

function resetVariables() {
//cancel repeat clicks
    waitingForNextMove = false;
    //show the nextbutton button
    let nextButton = document.getElementById("nextButton");
    if (pointsPlayer1 + pointsPlayer2 < 9) {
        nextButton.style.display = "block";
    } else {
        determineWinner();
    }
    //make the nextbutton button clickable
    nextButton.addEventListener('click', reactToSecondClick);
    // empty the card array (basically reflipping the cards)
    flippedCards = [null, null];
}

function showWhichPlayer() {
    document.getElementById("turn").innerHTML = players[currentPlayer];
}

function showScore() {
    document.getElementById("pointsPlayer1").innerHTML = pointsPlayer1;
    document.getElementById("pointsPlayer2").innerHTML = pointsPlayer2;
}

function checkForMatch() {
    if (flippedCards[0] === flippedCards[1]) {
        let winningImage = flippedCards[0];
        console.log(winningImage + " has been matched!");
        if (currentPlayer === 0) {
            pointsPlayer1++;
        } else {
            pointsPlayer2++;
        }
        // Switch the player to avoid extra playerswitches
        switchPlayer();
        showScore();

        let allBlocks = document.getElementsByClassName("item");
        for (let i = 0; i < imageArray.length; i++) {
            if (imageArray[i] === winningImage) {
                allBlocks[i].removeEventListener('click', reactToFirstClick);
                console.log("removed eventlistener from block " + i);
                imageArray[i] = null;
            }
        }
    }
}

function switchPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
}

function determineWinner() {
    if (pointsPlayer1 > pointsPlayer2) {
        winner = "Player1";
    } else {
        winner = "Player2";
    }
    let nextButton = document.getElementById("nextButton");
    nextButton.innerHTML = winner + " has won!";
    nextButton.style.display = 'block';
}