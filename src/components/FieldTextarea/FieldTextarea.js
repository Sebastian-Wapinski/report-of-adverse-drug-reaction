import React from 'react'

import { StyledFieldTextarea, Textarea } from './FieldTextarea.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { validateForm } from '../../validation/validateForm'
import { setErrorMessageConditionalExpression } from '../../helper/helper'

export const FieldTextarea = (props) => {
  const {
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, rows = 0, cols = 0, textErrorMessage, isRequired } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)
  const { [name]: stateValue } = formContext

  const handleOnChange = (e) => {
    formContext.dispatch(e.target)
    validateForm(e.target, formContext.dispatch, fieldData)
  }

  return (
    <StyledFieldTextarea
      {...otherProps}
    >
      <Label
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </Label>
      <Textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        value={stateValue}
        onChange={handleOnChange}
      />
      {
         setErrorMessageConditionalExpression(formContext[name + 'IsValid'], formContext[name], textErrorMessage, 'string')
        }
    </StyledFieldTextarea>
  )
}

export default FieldTextarea
