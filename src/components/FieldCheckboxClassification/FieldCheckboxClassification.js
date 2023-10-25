import React from 'react'

import { StyledFieldCheckboxClassification } from './FieldCheckboxClassification.styled'

import FieldCheckbox from '../FieldCheckbox'
import { FormContext } from '../../contexts/FormContext'

export const FieldCheckboxClassification = () => {
  const { sideEffects: stateDataSideEffects } = React.useContext(FormContext)
  const { sideEffectsIsPregnant, sideEffectsSeverity } = stateDataSideEffects

  return (
    <StyledFieldCheckboxClassification>
      <FieldCheckbox
        isDisabled={{
          isFetalInjury: {
            isDisabledState: (!sideEffectsSeverity ? true : !sideEffectsIsPregnant)
          },
          isDecease: {
            isDisabledState: !sideEffectsSeverity
          },
          isDangerToLife: {
            isDisabledState: !sideEffectsSeverity
          },
          isDisability: {
            isDisabledState: !sideEffectsSeverity
          },
          isOther: {
            isDisabledState: !sideEffectsSeverity
          }
        }}
      />
    </StyledFieldCheckboxClassification>
  )
}

export default FieldCheckboxClassification
