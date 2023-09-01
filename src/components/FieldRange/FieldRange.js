import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldRange } from './FieldRange.styled'

import Label from '../Label'
import Input from '../Input'
import Unit from '../Unit'
import ErrorMessage from '../ErrorMessage'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const FieldRange = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, min = 0, max = 0, unit = '', step = 1, isRequired, textErrorMessage } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)
  // const { [name]: stateValue } = formContext

  return (
    <StyledFieldRange
      {...otherProps}
    >
      <Label
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </Label>
      <Input
        type={'range'}
        min={min}
        max={max}
        name={name}
        step={step}
      />
      <Input
        id={id}
        type={'number'}
        min={min}
        max={max}
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

FieldRange.propTypes = {
  children: PropTypes.node
}

export default FieldRange
