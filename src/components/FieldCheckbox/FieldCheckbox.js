import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckbox } from './FieldCheckbox.styled'

import Label from '../Label'
import Input from '../Input'
import Text from '../Text'
import CheckboxContainer from '../CheckboxContainer'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldCheckbox = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { label, checkboxBtn = [] } = fieldData

  return (
    <StyledFieldCheckbox
      {...otherProps}
    >
      <Text
        text={label}
      />
      {
        checkboxBtn.map(checker => {
          const { checkboxId, checkboxName, checkboxLabel } = checker
          return (
            <CheckboxContainer
              key={checkboxId}
            >
              <Input
                type={'checkbox'}
                id={checkboxId}
                name={checkboxName}
              />
              <Label>
                {checkboxLabel}
              </Label>
            </CheckboxContainer>
          )
        })
      }
    </StyledFieldCheckbox>
  )
}

FieldCheckbox.propTypes = {
  children: PropTypes.node
}

export default FieldCheckbox
