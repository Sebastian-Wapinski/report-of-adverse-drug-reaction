import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'
import { validateForm } from '../../validation/validateForm'
import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const Input = (props) => {
  const {
    name,
    errorMessage,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

  // console.log(fieldData)

  const handleChangeData = (e) => {
    formContext.dispatch(e.target)
    validateForm(e.target, formContext.dispatch, fieldData)

    if (e.target.type === 'radio') {
      console.log('radio')
    }
  }

  return (
    <>
      <StyledInput
        onChange={handleChangeData}
        value={formContext[name]}
        name={name}
        {...otherProps}
      />
      {
      (formContext[name + 'IsValid'] === false) && (formContext[name] !== '') ?
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
