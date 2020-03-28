const lexicalAnalyzer = require('./validators/lexical-validator')
const syntaxAnalyzer = require('./validators/syntax-validators')

const validators = [
  {
    fn: lexicalAnalyzer.isInvalid,
    errorMessage: 'A expressão contém tokens inválidos'
  },
  {
    fn: syntaxAnalyzer.startsWithSymbol,
    errorMessage: 'Não pode começar com símbolo'
  },
  {
    fn: syntaxAnalyzer.endsWithSymbol,
    errorMessage: 'Não pode terminar com símbolo'
  },
  {
    fn: syntaxAnalyzer.isThereEmptyParenthesis,
    errorMessage: 'Não pode ter nenhum parênteses vazio'
  },
  {
    fn: syntaxAnalyzer.areTheSymbolsTogether,
    errorMessage: 'Não pode ter mais de um símbolo junto'
  },
  {
    fn: syntaxAnalyzer.allParenthesisAreClosed,
    errorMessage: 'Todos os parênteses precisam ser fechados'
  },
  {
    fn: syntaxAnalyzer.verifyIfParenthesisIsRight,
    errorMessage: 'Existem parênteses em posições erradas'
  }
]

module.exports = validators
