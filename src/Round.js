const Card = require('../src/Card')
const Turn = require('../src/Turn')

class Round {
  constructor(newDeck){
    this.turns = 0
    this.deck = newDeck
    this.currentCard;
    this.incorrectGuesses = []
    this.correctGuesses = 0
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cardDeck[this.turns]
    return this.currentCard
  }

  takeTurn(turn) {
    this.turns++
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    } else {
      this.correctGuesses++
    }
    return turn.giveFeedback()
    }

  calculatePercentCorrect() {
    let percentage = Math.round(this.correctGuesses / this.turns * 100)
    return `${percentage}%`
  }

  endRound() {
    if(this.turns === 3){
      let score = this.calculatePercentCorrect()
      let message = `** Round over! ** You answered ${score} correctly!`
      console.log(message)
      return message
    }
  }
}


module.exports = Round
