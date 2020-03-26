const numbers = Array.from([...Array(10).keys()], (number) => `${number}`)

const symbols = [...numbers, '/', '+', '-', '*', '(', ')']

module.exports = symbols