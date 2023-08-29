import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldText } from './FieldText.styled'

import Label from '../Label'
import Input from '../Input'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldText = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, placeholder } } = React.useContext(RenderingFieldContext)

  return (
    <StyledFieldText
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        type={'text'}
        id={id}
        placeholder={placeholder}
        name={name}
      />
    </StyledFieldText>
  )
}

FieldText.propTypes = {
  children: PropTypes.node
}

export default FieldText
