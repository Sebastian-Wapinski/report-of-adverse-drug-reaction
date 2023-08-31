export const validateForm = (formInputs, setValueForIsValid, formFieldData) => {
  const {
    name,
    value
  } = formInputs

  const {
    minAmountOfCharacters,
    regExp
  } = formFieldData

  // console.log(formFieldData)

  if (
    (
      minAmountOfCharacters ?
        value.length >= minAmountOfCharacters
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
  ) {
    setValueForIsValid({ name: [name + 'IsValid'], value: true })
  } else {
    setValueForIsValid({ name: [name + 'IsValid'], value: false })
  }
}
