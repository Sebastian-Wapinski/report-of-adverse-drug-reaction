import React from 'react'

import { StyledFieldRange, StyledInputRange, StyledInputNumber, StaledLabel } from './FieldRange.styled'

import Unit from '../Unit'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
// import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { setErrorMessageConditionalExpression } from '../../helper/helper'
import { FormContext } from '../../contexts/FormContext'

export const FieldRange = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, min = 0, max = 0, unit = '', step = 1, isRequired, textErrorMessage, minToValidate, maxToValidate, pageName } = fieldData

  const { [pageName]: stateData } = React.useContext(FormContext)

  return (
    <StyledFieldRange>
      <StaledLabel
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </StaledLabel>
      <StyledInputRange
        type={'range'}
        min={min}
        max={max}
        name={name}
        step={step}
        value={stateData[name]}
      />
      <StyledInputNumber
        id={id}
        type={'number'}
        min={minToValidate}
        max={maxToValidate}
        name={name}
        step={step}
      />
      <Unit>{unit}</Unit>
      {
        setErrorMessageConditionalExpression(stateData[name + 'IsValid'], stateData[name], textErrorMessage, 'number')
      }
    </StyledFieldRange>
  )
}

export default FieldRange
