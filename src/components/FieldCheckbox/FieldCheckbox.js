import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckbox } from './FieldCheckbox.styled'

import Label from '../Label'
import Input from '../Input'
import Text from '../Text'
import CheckboxContainer from '../CheckboxContainer'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const FieldCheckbox = (props) => {
  const {
    children,
    isDisabled,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { label, checkboxBtn = [] } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

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
            const { [checkboxName]: stateChecked } = formContext
            return (
              <CheckboxContainer
                key={checkboxId}
              >
                <Input
                  type={'checkbox'}
                  id={checkboxId}
                  name={checkboxName}
                  checked={stateChecked}
                  disabled={Object.keys(isDisabled).includes(checkboxName) ? isDisabled[checkboxName].isDisabledState : false}
                />
                <Label
                  htmlFor={checkboxId}
                >
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
  children: PropTypes.node,
  isDisabled: PropTypes.object
}

export default FieldCheckbox
