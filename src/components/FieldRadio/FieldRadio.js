import React from 'react'

import { StyledFieldRadio, StyledInput, StyledLabel, StyledContainer, StyledRadioLabel } from './FieldRadio.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import RadioContainer from '../RadioContainer'
import { FormContext } from '../../contexts/FormContext'

export const FieldRadio = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { name, label, radioBtn = [], isRequired, pageName } = fieldData

  const { [pageName]: stateData } = React.useContext(FormContext)
  const { [name]: stateValue } = stateData

  return (
    <StyledFieldRadio>
      <StyledLabel
        isRequired={isRequired}
      >
        {label}
      </StyledLabel>
      <StyledContainer>
        {
        Object.keys(fieldData).length !== 0 ?
          radioBtn.map(radioPosition => {
            const { value, radioId, radioLabel } = radioPosition

            return (
              <RadioContainer
                key={radioId}
              >
                <StyledInput
                  value={value}
                  name={name}
                  type={'radio'}
                  id={radioId}
                  checked={value === stateValue}
                />
                <StyledRadioLabel
                  htmlFor={radioId}
                >
                  {radioLabel}
                </StyledRadioLabel>
              </RadioContainer>
            )
          })
          :
          null
      }
      </StyledContainer>
    </StyledFieldRadio>
  )
}

export default FieldRadio
