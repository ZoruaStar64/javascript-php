// Initializing of the variables
let winner = null;
let movesMade = 0;
let lastBlockClicked = null;
let waitingForNextMove = true;
let pointsRoshni = 0;
let pointsAura = 0;
let players = ["Player 1", "Player 2"];
let flippedCards = [null, null];
let currentPlayer = Math.floor(Math.random() * 2);
showWhatPlayer();
showScore();

// makes cards react to clicks
let reactToFirstClick = function () {
    if (this.id !== lastBlockClicked && waitingForNextMove) {
        movesMade++;
        lastBlockClicked = this.id;
        flipcard(this.id);
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
            allBlocks[j].style.backgroundImage = "url(../img/imageDown.png)"
        }
    }

}