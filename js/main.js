console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      console.log("You've found a match.");
    } else {
      console.log("Sorry, try again.");
    }
  }
}

var flipCard = function (cardId) {
  flipCard(0);
  flipCard(2);
  console.log("User flipped" + card[cardId]);
  cardsInPlay.push(card[cardId]);
  checkForMatch();
}
