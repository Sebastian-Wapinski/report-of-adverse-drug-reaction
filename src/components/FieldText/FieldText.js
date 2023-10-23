import React from 'react'

import { StyledFieldText, StyledInput, StyledLabel } from './FieldText.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldText = () => {
  const { fieldData: { id, name, label, placeholder, textErrorMessage, isRequired } } = React.useContext(RenderingFieldContext)

  return (
    <>
      <StyledFieldText>
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
          errorMessage={textErrorMessage}
        />
      </StyledFieldText>
    </>

  )
}

export default FieldText
