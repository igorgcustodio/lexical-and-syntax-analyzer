const startsWithSymbol = (expression) => !!expression.match(/^[\+\.\/\*\-]/g)

const endsWithSymbol = (expression) => !!expression.match(/[\+\.\/\*\-\(]$/g)

const isThereEmptyParenthesis = (expression) => !!expression.match(/\(\)/g)

const areTheSymbolsTogether = (expression) => !!expression.match(/[\+\.\/\*\-]{2,}/g)

const allParenthesisAreClosed = (expression) => {
    const amountOfParenthesisOpened = (expression.match(/\(/g) || []).length
    const amountOfParenthesisClosed = (expression.match(/\)/g) || []).length
    
    return amountOfParenthesisOpened !== amountOfParenthesisClosed
}

const verifyIfParenthesisIsRight = (expression) => !!expression.match(/\d+\(/g)

module.exports = {
    startsWithSymbol,
    endsWithSymbol,
    isThereEmptyParenthesis,
    areTheSymbolsTogether,
    allParenthesisAreClosed,
    verifyIfParenthesisIsRight
}
