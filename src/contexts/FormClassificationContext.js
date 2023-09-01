import React from 'react'
import PropTypes from 'prop-types'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const init = {
  isDecease: false,
  isDangerToLife: false,
  isDisability: false,
  isFetalInjury: false,
  isOther: false,

  result: '',
  resultIsValid: false,

  dispatch: errorMsg
}

export const FormClassificationContext = React.createContext(init)

export const FormClassificationContextProvider = (props) => {
  const { children } = props

  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value }
  }

  const [formClassificationState, dispatch] = React.useReducer(reducer, init)

  return (
    <FormClassificationContext.Provider
      value={{
        ...formClassificationState,
        dispatch
      }}
    >
      {children}
    </FormClassificationContext.Provider>
  )
}

FormClassificationContextProvider.propTypes = {
  children: PropTypes.node
}

export default FormClassificationContextProvider
