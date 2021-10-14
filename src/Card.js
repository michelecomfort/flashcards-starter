class Card {
  constructor(id, question, choices, answer) {
    this.id = id
    this.question = question
    this.answers = choices
    this.correctAnswer = answer
  }
}



module.exports = Card
