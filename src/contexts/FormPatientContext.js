import React from 'react'
import PropTypes from 'prop-types'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const init = {
  initials: '',
  birthDate: '',
  sex: null,
  age: 0,
  height: 0,
  weight: 0,
  checked: false,

  initialsIsValid: false,
  birthDateIsValid: false,
  sexIsValid: false,
  ageIsValid: false,
  heightIsValid: false,
  weightIsValid: false,

  dispatch: errorMsg
}

export const FormPatientContext = React.createContext(init)

export const FormPatientContextProvider = (props) => {
  const { children } = props

  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value }
  }

  const [formMedicState, dispatch] = React.useReducer(reducer, init)

  return (
    <FormPatientContext.Provider
      value={{
        ...formMedicState,
        dispatch
      }}
    >
      {children}
    </FormPatientContext.Provider>
  )
}

FormPatientContextProvider.propTypes = {
  children: PropTypes.node
}

export default FormPatientContextProvider
