import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldToggle } from './FieldToggle.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import Input from '../Input'

export const FieldToggle = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { label, checkboxBtn = [] } = fieldData
  const [checkboxId, checkboxName] = checkboxBtn

  return (
    <StyledFieldToggle
      {...otherProps}
    >
      <Label
        htmlFor={checkboxId}
      >
        {label}
      </Label>
      <Input
        type={'checkbox'}
        id={checkboxId}
        name={checkboxName}
      />
    </StyledFieldToggle>
  )
}

FieldToggle.propTypes = {
  children: PropTypes.node
}

export default FieldToggle
