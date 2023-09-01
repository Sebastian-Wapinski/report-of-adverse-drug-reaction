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
    min,
    max,
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
            min === 0 ?
              value >= min
              :
              true
          )
          &&
          (
            max ?
              value <= max
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
