const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')

describe('Round', function() {
  it('should be a function', function() {
    const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
    const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
    const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(Round).to.be.a('function')
  })

  describe('Take Turn', function() {
    it('should be a function', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      expect(round.takeTurn).to.be.a('function')
    })

    it('should update turn count', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)

      // const turn = new Turn('Denver Beer Co', card2)
      round.takeTurn('Denver Beer Co')
      expect(round.turns).to.equal(1)
    })

    it('should evaluate current guess', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      let result = round.takeTurn('elephant')

      expect(result).to.equal('correct!')
    })
  })

  describe('Return Current Card', function() {
    it('should be a function', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      expect(round.returnCurrentCard).to.be.a('function')
    })

    it('should return the current card in play', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)

      var currentCard = round.returnCurrentCard()

      expect(currentCard).to.deep.equal({
        id: 4,
        question: 'What is Michele\'s favorite animal?',
        answers: ['kangaroo', 'moose', 'elephant'],
        correctAnswer: 'elephant'
      })
    })
  })

  describe('Calculate Percent Correct', function() {
    it('should be a function', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      expect(round.calculatePercentCorrect).to.be.a('function')
    })

    it('should return percentage of correct answers', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      const turn1 = new Turn('kangaroo', card1)
      const turn2 = new Turn('Denver Beer Co', card2)
      const turn3 = new Turn('Oct', card3)
      round.takeTurn('kangaroo')
      round.takeTurn('Denver Beer Co')
      round.takeTurn('Oct')
      let result = round.calculatePercentCorrect()
      expect(result).to.equal('67%')
    })
  })

  describe('End Round', function() {
    it('should be a function', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      expect(round.endRound).to.be.a('function')
    })

    it('should notify user that the round is over and give them their score', function() {
      const card1 = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      const card2 = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      const card3 = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      const deck = new Deck([card1, card2, card3])
      const round = new Round(deck)
      const turn1 = new Turn('kangaroo', card1)
      const turn2 = new Turn('Denver Beer Co', card2)
      const turn3 = new Turn('Oct', card3)
      round.takeTurn(turn1)
      round.takeTurn(turn2)
      round.takeTurn(turn3)
      let ending = round.endRound()
      let result = round.calculatePercentCorrect()

      expect(ending).to.equal(`** Round over! ** You answered ${result} correctly!`)
    })
  })

})
