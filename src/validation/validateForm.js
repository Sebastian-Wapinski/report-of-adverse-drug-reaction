import { formMedicData } from '../data/formMedicData'

export const validateForm = (formInputs, setValueForIsValid) => {
  const {
    name,
    value
  } = formInputs

  console.log(name, value)

  const filteredValidationData = formMedicData.filter(item => item.name === name)

  const {
    minAmountOfCharacters,
    regExp
  } = filteredValidationData[0]

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
