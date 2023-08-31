import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldRadio } from './FieldRadio.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'
import Input from '../Input'
import Text from '../Text'
import RadioContainer from '../RadioContainer'

export const FieldRadio = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { name, label, radioBtn = [] } = fieldData

  return (
    <StyledFieldRadio
      {...otherProps}
    >
      <Text
        text={label}
      />
      {
        Object.keys(fieldData).length !== 0 ?
          radioBtn.map(radioPosition => {
            const { value, radioId, radioLabel, checked } = radioPosition

            return (
              <RadioContainer
                key={radioId}
              >
                <Input
                  value={value}
                  name={name}
                  type={'radio'}
                  id={radioId}
                  checked={checked}
                />
                <Label
                  htmlFor={radioId}
                >
                  {radioLabel}
                </Label>
              </RadioContainer>
            )
          })
          :
          null
      }
    </StyledFieldRadio>
  )
}

FieldRadio.propTypes = {
  children: PropTypes.node
}

export default FieldRadio
