import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldToggle, StyleInput } from './FieldToggle.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const FieldToggle = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, isRequired } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)
  const { [name]: stateValue } = formContext

  return (
    <StyledFieldToggle
      {...otherProps}
    >
      <Label
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </Label>
      <StyleInput
        type={'checkbox'}
        id={id}
        checked={stateValue}
        name={name}
      />
    </StyledFieldToggle>
  )
}

FieldToggle.propTypes = {
  children: PropTypes.node
}

export default FieldToggle
