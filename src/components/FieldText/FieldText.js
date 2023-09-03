import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldText, StyledInput, StyledLabel } from './FieldText.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { ErrorMessage } from '../ErrorMessage'

export const FieldText = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, placeholder, textErrorMessage, isRequired } } = React.useContext(RenderingFieldContext)

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

  return (
    <>
      <StyledFieldText
        {...otherProps}
      >
        <StyledLabel
          htmlFor={id}
          isRequired={isRequired}
        >
          {label}
        </StyledLabel>
        <StyledInput
          type={'text'}
          id={id}
          placeholder={placeholder}
          name={name}
        />
        {
        (formContext[name + 'IsValid'] === false) && (formContext[name] !== '') ?
          <ErrorMessage>{ textErrorMessage }</ErrorMessage>
          :
          null
    }
      </StyledFieldText>
    </>

  )
}

FieldText.propTypes = {
  children: PropTypes.node
}

export default FieldText
