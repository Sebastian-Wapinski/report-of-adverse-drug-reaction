import React from 'react'
import PropTypes from 'prop-types'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const init = {
  sideEffectOccurDate: '',
  sideEffectsDescription: '',
  sideEffectsIsPregnant: false,
  sideEffectsSeverity: false,

  sideEffectOccurDateIsValid: false,
  sideEffectsDescriptionIsValid: false,
  sideEffectsIsPregnantIsValid: false,
  sideEffectsSeverityIsValid: false,

  dispatch: errorMsg
}

export const FormSideEffectsContext = React.createContext(init)

export const FormSideEffectsContextProvider = (props) => {
  const { children } = props

  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value }
  }

  const [formSideEffectsState, dispatch] = React.useReducer(reducer, init)

  return (
    <FormSideEffectsContext.Provider
      value={{
        ...formSideEffectsState,
        dispatch
      }}
    >
      {children}
    </FormSideEffectsContext.Provider>
  )
}

FormSideEffectsContextProvider.propTypes = {
  children: PropTypes.node
}

export default FormSideEffectsContextProvider
