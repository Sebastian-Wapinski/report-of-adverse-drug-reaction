import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldRadio, StyledInput, StyledLabel, StyledContainer } from './FieldRadio.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

import Label from '../Label'
import RadioContainer from '../RadioContainer'

export const FieldRadio = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { name, label, radioBtn = [], isRequired } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const { [name]: stateValue } = React.useContext(contextForm)

  return (
    <StyledFieldRadio
      {...otherProps}
    >
      <Label
        isRequired={isRequired}
      >
        {label}
      </Label>
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
                <StyledLabel
                  htmlFor={radioId}
                >
                  {radioLabel}
                </StyledLabel>
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

FieldRadio.propTypes = {
  children: PropTypes.node
}

export default FieldRadio
