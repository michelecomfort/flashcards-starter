const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game()
    expect(Game).to.be.a('function')
  })
const game = new Game()
  game.startGame()

  it('should add create new cards', function() {

  })
})
