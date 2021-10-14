const Turn = require('../src/Turn')

class Round {
  constructor(newDeck) {
    this.turns = 0
    this.deck = newDeck
    this.currentCard = newDeck.cardDeck[0]
    this.incorrectGuesses = []
    this.correctGuesses = 0
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cardDeck[this.turns]
    return this.currentCard
  }

  takeTurn(guess) {
    this.turns++
    var turn = new Turn(guess, this.currentCard)
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    } else {
      this.correctGuesses++
    }
    this.returnCurrentCard()
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let percentage = Math.round(this.correctGuesses / this.turns * 100)
    return `${percentage}%`
  }

  endRound() {
    let score = this.calculatePercentCorrect()
    let message = `** Round over! ** You answered ${score} correctly!`
    console.log(message)
    return message
  }

}


module.exports = Round
