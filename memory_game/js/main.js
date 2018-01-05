// cards is an array that contains 4 card objects
var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

// cardsInPlay is an array that contains the rank of each card in play
var cardsInPlay = [];

/**
 * score keep count of the number of times the user has completed a match
 * successful
 */
var score = 0;

/**
 * checkForMatch function check to see if the two card in play are a match and
 * display an alert, adds one to the score if match successful
 */
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        score++;
    } else {
        alert("Sorry, try again.");
    }
};

/**
 * flipCard find the card id from the card variable, changes the image and
 * if two cards are in play, runs checkForMatch function
 */
var flipCard = function() {
    var cardId = this.getAttribute('data-id');
  //  console.log(cards[cardId].cardImage);
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
};

/**
 * createBoard places the card back images on the dom, event on click for
 * flipCard function
 */
var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
        var resetButton = document.getElementsByTagName('button');
    }
};

/** delete all card inside of the board, including cardinplay
 * update userscore dom element
 * then call create board.
 */
var resetBoard = function() {
    var resetButton = document.getElementsByTagName('button');
    resetButton.addEventListener('click', );

}

var scoreText = document.createElement('p')
scoreText.textContent = score
createBoard();
// resetBoard();
