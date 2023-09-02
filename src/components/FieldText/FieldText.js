import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldText, StyledInput } from './FieldText.styled'

import Label from '../Label'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldText = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, placeholder, textErrorMessage, isRequired } } = React.useContext(RenderingFieldContext)

  return (
    <>
      <StyledFieldText
        {...otherProps}
      >
        <Label
          htmlFor={id}
          isRequired={isRequired}
        >
          {label}
        </Label>
        <StyledInput
          type={'text'}
          id={id}
          placeholder={placeholder}
          name={name}
          errorMessage={textErrorMessage}
        />
      </StyledFieldText>
      {
        (formContext[name + 'IsValid'] === false) && (formContext[name] !== '') ?
          <ErrorMessage>{ errorMessage }</ErrorMessage>
          :
          null
    }
    </>

  )
}

FieldText.propTypes = {
  children: PropTypes.node
}

export default FieldText
