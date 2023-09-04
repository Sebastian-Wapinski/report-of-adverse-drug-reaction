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
    currentDay,
    currentMonth,
    currentYear,
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
          &&
          (
            currentDay ?
                (Number(value.slice(6, 10)) < currentYear)
               ||
              (
                Number(value.slice(3, 5)) < currentMonth
                && Number(value.slice(6, 10)) <= currentYear
              )
              ||
                (Number(value.slice(0, 2)) <= currentDay
              && Number(value.slice(3, 5)) <= currentMonth
              && Number(value.slice(6, 10)) <= currentYear)
              :
              true
          )
  ) {
    setValueForIsValid({ name: [name + 'IsValid'], value: true })
  } else {
    setValueForIsValid({ name: [name + 'IsValid'], value: false })
  }
}
