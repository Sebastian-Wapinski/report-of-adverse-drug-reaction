import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckbox, CheckboxLabel, StyledLabel, StyledCheckboxesContainer, StyledInput, StyledCheckboxContainer } from './FieldCheckbox.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const FieldCheckbox = (props) => {
  const {
    children,
    isDisabled,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { label, checkboxBtn = [], isRequired } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)

  return (
    <StyledFieldCheckbox
      {...otherProps}
    >
      <StyledLabel
        isRequired={isRequired}
      >
        {label}
      </StyledLabel>
      <StyledCheckboxesContainer>
        {
          checkboxBtn.map(checker => {
            const { checkboxId, checkboxName, checkboxLabel } = checker
            const { [checkboxName]: stateChecked } = formContext
            return (
              <StyledCheckboxContainer
                key={checkboxId}
              >
                <StyledInput
                  type={'checkbox'}
                  id={checkboxId}
                  name={checkboxName}
                  checked={stateChecked}
                  disabled={Object.keys(isDisabled).includes(checkboxName) ? isDisabled[checkboxName].isDisabledState : false}
                />
                <CheckboxLabel
                  htmlFor={checkboxId}
                >
                  {checkboxLabel}
                </CheckboxLabel>
              </StyledCheckboxContainer>
            )
          })
      }
      </StyledCheckboxesContainer>
    </StyledFieldCheckbox>
  )
}

FieldCheckbox.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.object
}

export default FieldCheckbox
