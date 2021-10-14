class Deck {
  constructor(cardCollection) {
    this.cardDeck = cardCollection

  }

  countCards() {
    return this.cardDeck.length
  }
}




module.exports = Deck
