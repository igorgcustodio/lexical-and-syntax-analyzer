const validators = require('../validators')

const addValidatorsToExpressions = (expressions) => {
  let objects = []
  expressions.map((expression) => {
    const obj = {
      expression,
      validators
    }
    
    objects.push(obj)
  })
  
  return objects
}

const getValidations = (objects) => {
  let validations = []
  
  objects.map(object => {
    let errors = []
    
    object.validators.map(validator => {
      if (validator.fn(object.expression)) {
        errors.push(validator.errorMessage)
      }
    })
    
    const validation = {
      expression: object.expression,
      isValid: errors.length === 0,
      errors,
    }
    
    validations.push(validation)
  })
  
  return validations
}

module.exports = {
  addValidatorsToExpressions,
  getValidations
}
