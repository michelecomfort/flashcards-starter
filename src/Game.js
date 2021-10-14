const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')

class Game {
  constructor() {
    this.currentRound = 0
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    var cardStorage = []
    prototypeQuestions.forEach(cardData => {
      var card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      cardStorage.push(card)
    })
    var deck = new Deck(cardStorage)
    var round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;
