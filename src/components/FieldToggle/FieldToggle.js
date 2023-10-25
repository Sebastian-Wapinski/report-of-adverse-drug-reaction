import React from 'react'

import { StyledFieldToggle, StyleInput, StyledLabel } from './FieldToggle.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

// import { ChangeFormContext } from '../../contexts/ChangeFormContext'
// import { FormClassificationContext } from '../../contexts/FormClassificationContext'
import { formClassificationData } from '../../data/formClassificationData'
import { FormContext } from '../../contexts/FormContext'

export const FieldToggle = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, isRequired, pageName } = fieldData

  const { [pageName]: stateData, classification: formClassificationContext, dispatch } = React.useContext(FormContext)
  const { [name]: stateValue } = stateData

  const clearAllCheckboxes = React.useCallback(() => {
    const sideEffectsSeverityObj = formClassificationData.filter(elem => elem.name === 'sideEffectsSeverityType')
    const sideEffectsSeverityArr = sideEffectsSeverityObj[0].checkboxBtn
    sideEffectsSeverityArr.forEach(checkboxBtn => {
      if (formClassificationContext[checkboxBtn.checkboxName] === true) {
        dispatch({ pageName: 'classification', name: checkboxBtn.checkboxName, value: false })
      }
    })
  }, [dispatch, formClassificationContext])

  const clearCheckbox = React.useCallback((nameToClear) => {
    if (formClassificationContext[nameToClear] === true) {
      dispatch({ pageName: 'classification', name: nameToClear, value: false })
    }
  }, [dispatch, formClassificationContext])

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
