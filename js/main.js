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
var flipCard = function (cardId) {
  //display card rank (queen or king) the user just flipped
  console.log("User flipped " + cards[cardId].rank);
  //add card to array of cardsInPlay
  cardsInPlay.push(cards[cardId].rank);
  //Display card image
  console.log(cards[cardId].cardImage);
  //Display card suit
  console.log(cards[cardId].suit);
  //check to see if 2 cards have been played
    if (cardsInPlay.length === 2) {
      //if so, "checkForMatch"
      checkForMatch();
    }
  };

//For now we are manually calling the flipCard function
//to represent a user's play
//Call the flipCard function, passing in an index as the argument
  flipCard(0);
  flipCard(2);
