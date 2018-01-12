console.log("Up and running!");


//in the "cards" array
//create four objects, one for each card
var cards = [
  {
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

//create an array to store "cardsInPlay"
var cardsInPlay = [];

//create a function to "checkForMatch"
var checkForMatch = function () {
  //Check to see if 2 cards match and provide feeback to user
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You've found a match.");
    } else {
      console.log("Sorry, try again.");
    }
  };

//create a function to represent user flippin a card
var flipCard = function () {
  //
  var cardId = this.getAttribute('data-id');
  //display card rank (queen or king) the user just flipped
  console.log("User flipped " + cards[cardId].rank);
  //add card to array of cardsInPlay
  cardsInPlay.push(cards[cardId].rank);
  //Display card image
  console.log(cards[cardId].cardImage);
  //Display card suit
  console.log(cards[cardId].suit);
//update the src of the imaget that was just clicked
this.setAttribute('src', cards[cardId].cardImage);

  //check to see if 2 cards have been played
    if (cardsInPlay.length === 2) {
      //if so, "checkForMatch"
      checkForMatch();
    }
  };

  //Creates the game board
  var createBoard = function () {
    //loop through cards array
    for (var i = 0; i < cards.length; i++) {
      //add each card to the board
      //get image for card back
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
    }
  };

//Invoke the createBoard function
createBoard();
