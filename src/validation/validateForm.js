export const validateForm = (formInputs, setValueForIsValid, formFieldData) => {
  const {
    name,
    value,
    innerText
  } = formInputs

  const {
    minAmountOfCharacters,
    amountOfCharacters,
    regExp,
    minToValidate,
    maxToValidate,
    list
  } = formFieldData

  let listElemArr
  if (list) {
    listElemArr = list.map(elem => {
      return (
        elem.resultType
      )
    })
  }

  if (
    (
      minAmountOfCharacters ?
        value.length >= minAmountOfCharacters
        :
        true
    )
          &&
          (
            amountOfCharacters ?
              value.length === amountOfCharacters
              :
              true
          )
          &&
          (
            regExp ?
              regExp.test(value)
              :
              true
          )
          &&
          (
            minToValidate === 0 ?
              value >= minToValidate
              :
              true
          )
          &&
          (
            maxToValidate ?
              value <= maxToValidate
              :
              true
          )
          &&
          (
            listElemArr ?
              listElemArr.includes(innerText)
              :
              true
          )
  ) {
    setValueForIsValid({ name: [name + 'IsValid'], value: true })
  } else {
    setValueForIsValid({ name: [name + 'IsValid'], value: false })
  }
}
