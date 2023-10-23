import React from 'react'

import { StyledFieldToggle, StyleInput, StyledLabel } from './FieldToggle.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { FormClassificationContext } from '../../contexts/FormClassificationContext'
import { formClassificationData } from '../../data/formClassificationData'

export const FieldToggle = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, isRequired } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)
  const { [name]: stateValue } = formContext

  const formClassificationContext = React.useContext(FormClassificationContext)

  const clearAllCheckboxes = React.useCallback(() => {
    const sideEffectsSeverityObj = formClassificationData.filter(elem => elem.name === 'sideEffectsSeverityType')
    const sideEffectsSeverityArr = sideEffectsSeverityObj[0].checkboxBtn
    sideEffectsSeverityArr.forEach(checkboxBtn => {
      if (formClassificationContext[checkboxBtn.checkboxName] === true) {
        formClassificationContext.dispatch({ name: checkboxBtn.checkboxName, value: false })
      }
    })
  }, [formClassificationContext])

  const clearCheckbox = React.useCallback((nameToClear) => {
    if (formClassificationContext[nameToClear] === true) {
      formClassificationContext.dispatch({ name: nameToClear, value: false })
    }
  }, [formClassificationContext])

  React.useEffect(() => {
    if (name === 'sideEffectsSeverity' && stateValue === false) {
      clearAllCheckboxes()
    }
    if (name === 'sideEffectsIsPregnant' && stateValue === false) {
      clearCheckbox('isFetalInjury')
    }
  }, [clearAllCheckboxes, clearCheckbox, formClassificationContext, name, stateValue])

  return (
    <StyledFieldToggle>
      <StyledLabel
        htmlFor={id}
        isRequired={isRequired}
      >
        {label}
      </StyledLabel>
      <StyleInput
        type={'checkbox'}
        id={id}
        checked={stateValue}
        name={name}
      />
    </StyledFieldToggle>
  )
}

export default FieldToggle
