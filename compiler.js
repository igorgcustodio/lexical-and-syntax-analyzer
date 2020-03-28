let expressions = []

if (process.argv.slice(2).length > 0) {
  expressions = process.argv.slice(2)
} else {
  expressions = [
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
}

const validationsHandler = require('./handlers/validations-handler')

const validations = validationsHandler.addValidatorsToExpressions(expressions)

const processExpressions = () => console.log(validationsHandler.getValidations(validations))

processExpressions()
