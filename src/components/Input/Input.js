import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'
import { FormMedicContext } from '../../contexts/FormMedicContext'
import { validateForm } from '../../validation/validateForm'

export const Input = (props) => {
  const {
    name,
    errorMessage,
    ...otherProps
  } = props

  const formMedicContext = React.useContext(FormMedicContext)

  const handleChangeData = (e) => {
    formMedicContext.dispatch(e.target)
    validateForm(e.target, formMedicContext.dispatch)
  }

  const handleClicked = () => {
    formMedicContext.dispatch({ name: [name + 'IsClicked'], value: true })
  }

  return (
    <>
      <StyledInput
        onChange={handleChangeData}
        onClick={handleClicked}
        value={formMedicContext[name]}
        name={name}
        {...otherProps}
      />
      {
      (formMedicContext[name + 'IsValid'] === false) && (formMedicContext[name + 'IsClicked'] === true) ?
        <div>{ errorMessage }</div>
        :
        null
    }
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  errorMessage: PropTypes.string
}

export default Input
