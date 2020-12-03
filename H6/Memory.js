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
let reactToFirstClick = function () {
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
let reactToSecondClick = function () {
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

}

function shuffleDeck(imageArray) {

}

function resetVariables() {

}

function showWhichPlayer() {

}

function showScore() {

}

function checkForMatch() {

}

function switchPlayer() {

}

function determineWinner() {

}