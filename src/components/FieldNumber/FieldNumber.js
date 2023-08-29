import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldNumber } from './FieldNumber.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import Input from '../Input'
import Unit from '../Unit'

export const FieldNumber = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, min = 0, max = 0, unit } } = React.useContext(RenderingFieldContext)

  return (
    <StyledFieldNumber
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        type={'number'}
        id={id}
        name={name}
        min={min}
        max={max}
      />
      <Unit>{unit}</Unit>
    </StyledFieldNumber>
  )
}

FieldNumber.propTypes = {
  children: PropTypes.node
}

export default FieldNumber
