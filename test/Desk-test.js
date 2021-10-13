const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck()
    expect(Deck).to.be.a('function')
  })

  it('should create a new deck', function() {
    const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
    const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
    const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
    const deck = new Deck([card1, card2, card3])

    expect(deck.cardDeck[0]).to.deep.equal({
      id: 4,
      question: 'What is Michele\'s favorite animal?',
      answers: ['kangaroo', 'moose', 'elephant'],
      correctAnswer: 'elephant'
    })
    expect(deck.cardDeck.length).to.equal(3)
  })

})
