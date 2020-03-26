const allowedSymbols = require('./utils/allowedSymbols')
const validators = require('./utils/expression-types')

const isLexicallyValid = (expression) => {
  const symbols = expression.split('')
  
  for (const symbol of symbols) {
    if (allowedSymbols.indexOf(symbol) === -1) {
      console.log(`Símbolo inválido: ${symbol}`)
      return false
    }
  }
  return true
}

const syntaxAnalyzer = (expression) => {
  
  if (validators.startsWithSymbol(expression)) {
    console.log('nao pode começar com simbolo')
    return false
  }
  
  if (validators.endsWithSymbol(expression)) {
    console.log('nao pode terminar com simbolo')
    return false
  }
  
  if (validators.isThereEmptyParenthesis(expression)) {
    console.log('nao pode ter parenteses vazios')
    return false
  }
  
  if (validators.areTheSymbolsTogether(expression)) {
    console.log('nao pode ter dois simbolos ou mais juntos')
    return false
  }
  
  if (!validators.allParenthesisAreClosed(expression)) {
    console.log('nao pode ter parenteses abertos')
    return false
  }
  
  if (validators.verifyIfParenthesisIsRight(expression)) {
    console.log('parenteses errado')
    return false
  }
  
  return true
}

let counter = 0

const isSyntacticallyValid = (expression) => {
  console.log(`${++counter} -> ${expression}`)
  if (isLexicallyValid(expression)) {
    return syntaxAnalyzer(expression)
  } else {
    console.log('A expressão possui símbolos não permitidos.')
    return false
  }
}

// const expression = `${process.argv.slice(2)}`

const expressions = [
  '1+a',
  '%+1',
  '1+-2',
  '1+2',
  '-1+2',
  '1+()',
  '1+(12)',
  '12(12)',
  '1+(((12+45)/23)+(12+(123/456))+12)+(12-34)/45',
  '1+((123+(12+45)/23)+(12+(123/456))+12)+(12-34)/45',
  '1+(((12+45)/23)+(12+(123/456))+12)+(12-34)/45+(12)',
  '1+((12+45)/23)+(12+(123/456))+12)+(12-34)/45',
  '1+(((12+45)/23)+(12+(123/456)+12)+(12-34)/45'

]

for (const expression of expressions) {
  console.log(isSyntacticallyValid(expression))
}
