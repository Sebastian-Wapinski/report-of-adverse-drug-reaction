import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldRange } from './FieldRange.styled'

import Label from '../Label'
import Input from '../Input'
import Unit from '../Unit'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldRange = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, min = 0, max = 0, unit = '', step = 1 } } = React.useContext(RenderingFieldContext)
  const [inputValue, setInputValue] = React.useState(0)

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledFieldRange
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        type={'range'}
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        onChange={changeInputValue}
      />
      <Input
        type={'text'}
        value={inputValue}
        onChange={changeInputValue}
      />
      <Unit>{unit}</Unit>
    </StyledFieldRange>
  )
}

FieldRange.propTypes = {
  children: PropTypes.node
}

export default FieldRange
