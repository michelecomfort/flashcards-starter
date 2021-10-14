const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })
  it('should be an instance of Turn', function() {
    var turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should have a guess', function() {
    var turn = new Turn('pug')
    expect(turn.guess).to.equal('pug')
  })

  it('should take in a card object', function() {
    var card = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
    var turn = new Turn('kangaroo', card)
    expect(turn.card.id).to.equal(4)
    expect(turn.card.question).to.equal('What is Michele\'s favorite animal?')
    expect(turn.card.answers).to.deep.equal(['kangaroo', 'moose', 'elephant'])
    expect(turn.card.correctAnswer).to.equal('elephant')
  })

  describe('returnGuess', function() {
    it('should be a function', function() {
      var card = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      var turn = new Turn('kangaroo', card)
      expect(turn.returnGuess).to.be.a('function')
    })

    it('should return the guess as a string', function() {
      var card = new Card(4, 'What is Michele\'s favorite animal?', ['kangaroo', 'moose', 'elephant'], 'elephant')
      var turn = new Turn('kangaroo', card)
      var currentGuess = turn.returnGuess()
      expect(currentGuess).to.be.a('string')
    })
  })

  describe('returnCard', function() {
    it('should be a function', function() {
      var card = new Card(5, "What Denver Brewery makes Princess Yum Yum?", ['Cerebral', 'Denver Beer Co', 'Black Shirt'], 'Denver Beer Co')
      var turn = new Turn('Denver Beer Co', card)
      expect(turn.returnCard).to.be.a('function')
    })

    it('should return a card to the function', function() {
      var card = new Card(5, 'What\'s the capital of NY?' ['NYC', 'Whiteplains', 'Albany'], 'Albany')
      var turn = new Turn('Albany', card)
      var currentCard = turn.returnCard()
      expect(currentCard).to.be.a('object')
    })
  })

  describe('evaluateGuess', function() {
    it('should be a function', function() {
      var card = new Card(6, 'What month is it?', ['Sept', 'Oct', 'Nov'], 'Oct')
      var turn = new Turn('Oct', card)
      expect(turn.evaluateGuess).to.be.a('function')
    })

    it('should check if current guess matches the answer', function() {
      var card = new Card(7, 'What day is it?', ['Sun', 'Mon', 'Tue'], 'Mon')
      var turn = new Turn('Mon', card)
      var turn2 = new Turn('Tue', card)
      var checkAnswer = turn.evaluateGuess()
      var checkAnswer2 = turn2.evaluateGuess()
      expect(checkAnswer).to.equal(true)
      expect(checkAnswer2).to.equal(false)
    })
  })

  describe('giveFeedback', function() {
    it('should be a function', function() {
      var card = new Card(8, 'What is Michele\'s favorite color?', ['orange', 'green', 'black'], 'green')
      var turn = new Turn('orange', card)
      expect(turn.giveFeedback).to.be.a('function')
    })

    it('should give user feedback on whether their answer is correct', function() {
      var card = new Card(9, 'What is the best show ever?', ['30 Rock', 'Parks & Rec', 'Seinfeld'], 'Parks & Rec')
      var turn = new Turn('Seinfeld', card)
      var turn2 = new Turn('Parks & Rec', card)
      var checkAnswer = turn.giveFeedback()
      var checkAnswer2 = turn2.giveFeedback()
      expect(checkAnswer).to.equal('incorrect!')
      expect(checkAnswer2).to.equal('correct!')
    })
  })
})
