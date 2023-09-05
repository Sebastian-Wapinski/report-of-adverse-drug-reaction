import React from 'react'

import { StyledFieldRange, StyledInputRange, StyledInputNumber, StaledLabel } from './FieldRange.styled'

import Unit from '../Unit'
import ErrorMessage from '../ErrorMessage'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const FieldRange = (props) => {
  const {
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, min = 0, max = 0, unit = '', step = 1, isRequired, textErrorMessage, minToValidate, maxToValidate } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

  return (
    <StyledFieldRange
      {...otherProps}
    >
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
        value={formContext[name]}
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
          (formContext[name + 'IsValid'] === false) && (formContext[name] !== 0) ?
            <ErrorMessage>{ textErrorMessage }</ErrorMessage>
            :
            null
        }
    </StyledFieldRange>
  )
}

export default FieldRange
