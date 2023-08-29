import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckbox } from './FieldCheckbox.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import Input from '../Input'

export const FieldCheckbox = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label } } = React.useContext(RenderingFieldContext)

  return (
    <StyledFieldCheckbox
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        type={'checkbox'}
        id={id}
        name={name}
      />
    </StyledFieldCheckbox>
  )
}

FieldCheckbox.propTypes = {
  children: PropTypes.node
}

export default FieldCheckbox
