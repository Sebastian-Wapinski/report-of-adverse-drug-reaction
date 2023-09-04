import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'
import { validateForm } from '../../validation/validateForm'
import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { ErrorMessage } from '../ErrorMessage'

export const Input = (props) => {
  const {
    errorMessage,
    name,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { type } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

  const handleChangeData = (e) => {
    if (type === 'toggle' || type === 'checkboxClassification' || type === 'checkbox') {
      formContext.dispatch({ name, value: e.target.checked })
      return
    }

    if (type === 'range' || type === 'number') {
      formContext.dispatch({ name, value: Number(e.target.value) })
      validateForm(e.target, formContext.dispatch, fieldData)
      return
    }

    formContext.dispatch(e.target)
    validateForm(e.target, formContext.dispatch, fieldData)
  }

  return (
    <>
      <StyledInput
        onChange={handleChangeData}
        value={formContext[name]}
        name={name}
        autoComplete={'one-time-code'}
        {...otherProps}
      />
      {
        type === 'radio' ||
          type === 'range' ||
            type === 'number' ||
              type === 'checkbox' ||
                type === 'text' ?
          null
          :
            (formContext[name + 'IsValid'] === false) && (formContext[name] !== '') ?
              <ErrorMessage>{ errorMessage }</ErrorMessage>
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
