const checkMinAmountOfCharacters = (minAmountOfCharacters, valueLength) => {
  return minAmountOfCharacters ? valueLength >= minAmountOfCharacters : true
}

const checkAmountOfCharacters = (amountOfCharacters, valueLength) => {
  return amountOfCharacters ? valueLength === amountOfCharacters : true
}

const testRegExp = (regExp, value) => {
  return regExp ? regExp.test(value) : true
}

const checkMinToValidate = (minToValidate, value) => {
  return minToValidate === 0 ? value >= minToValidate : true
}

const checkMaxToValidate = (maxToValidate, value) => {
  return maxToValidate ? value <= maxToValidate : true
}

const checkIsListIncludesText = (listElemArr, innerText) => {
  return listElemArr ? listElemArr.includes(innerText) : true
}

const createList = (list) => {
  return list.map(elem => {
    return (
      elem.resultType
    )
  })
}

const checkIsNotExceededCurrentDay = (currentDay, value, currentYear, currentMonth) => {
  return currentDay ?
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
}

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
    list,
    pageName
  } = formFieldData

  let listElemArr
  if (list) {
    listElemArr = createList(list)
  }

  if (
    checkMinAmountOfCharacters(minAmountOfCharacters, value.length)
          &&
          checkAmountOfCharacters(amountOfCharacters, value.length)
          &&
          testRegExp(regExp, value)
          &&
          checkMinToValidate(minToValidate, value)
          &&
          checkMaxToValidate(maxToValidate, value)
          &&
          checkIsListIncludesText(listElemArr, innerText)
          &&
          checkIsNotExceededCurrentDay(currentDay, value, currentYear, currentMonth, currentDay)
  ) {
    setValueForIsValid({ pageName, name: [name + 'IsValid'], value: true })
  } else {
    setValueForIsValid({ pageName, name: [name + 'IsValid'], value: false })
  }
}
