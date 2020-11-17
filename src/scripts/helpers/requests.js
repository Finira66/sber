export const allValueRequired = (dataSet, fields) => {
  let isValid = true

  fields.forEach(function(field) {
    if (!Object.prototype.hasOwnProperty.call(dataSet, field)) {
      isValid = false
    } else if (!dataSet[field] || !(dataSet[field] + '').length) {
      isValid = false
    }
  })

  return isValid
}
