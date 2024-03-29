import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckbox, StyledCheckboxLabel, StyledLabel, StyledCheckboxesContainer, StyledInput, StyledCheckboxContainer } from './FieldCheckbox.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { FormContext } from '../../contexts/FormContext'

export const FieldCheckbox = (props) => {
  const {
    isDisabled
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { label, checkboxBtn = [], isRequired, pageName } = fieldData

  const { [pageName]: stateData } = React.useContext(FormContext)

  return (
    <StyledFieldCheckbox>
      <StyledLabel
        isRequired={isRequired}
      >
        {label}
      </StyledLabel>
      <StyledCheckboxesContainer>
        {
          checkboxBtn.map(checker => {
            const { checkboxId, checkboxName, checkboxLabel } = checker
            const { [checkboxName]: stateChecked } = stateData
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
                <StyledCheckboxLabel
                  htmlFor={checkboxId}
                >
                  {checkboxLabel}
                </StyledCheckboxLabel>
              </StyledCheckboxContainer>
            )
          })
      }
      </StyledCheckboxesContainer>
    </StyledFieldCheckbox>
  )
}

FieldCheckbox.propTypes = {
  isDisabled: PropTypes.object
}

export default FieldCheckbox
