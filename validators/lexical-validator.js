const allowedSymbols = require('../utils/allowedSymbols')

const isInvalid = (expression) => {
  for (const token of expression) {
    if (allowedSymbols.indexOf(token) === -1) {
      return true
    }
  }
  return false
}

module.exports = {
  isInvalid
}
