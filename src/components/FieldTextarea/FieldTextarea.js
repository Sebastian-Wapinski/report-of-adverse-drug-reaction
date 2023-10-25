import React from 'react'

import { StyledFieldTextarea, Textarea, StyledLabel } from './FieldTextarea.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import { validateForm } from '../../validation/validateForm'
import { setErrorMessageConditionalExpression } from '../../helper/helper'
import { FormContext } from '../../contexts/FormContext'

export const FieldTextarea = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, rows = 0, cols = 0, textErrorMessage, isRequired, pageName } = fieldData

  const { [pageName]: stateData, dispatch } = React.useContext(FormContext)
  const { [name]: stateValue } = stateData

  const handleOnChange = (e) => {
    dispatch({ pageName, name, value: e.target.value })
    validateForm(e.target, dispatch, fieldData)
  }

  return (
    <StyledFieldTextarea>
      <StyledLabel
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </StyledLabel>
      <Textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        value={stateValue}
        onChange={handleOnChange}
      />
      {
         setErrorMessageConditionalExpression(stateData[name + 'IsValid'], stateData[name], textErrorMessage, 'string')
        }
    </StyledFieldTextarea>
  )
}

export default FieldTextarea
