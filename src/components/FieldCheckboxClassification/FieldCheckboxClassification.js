import React from 'react'

import { StyledFieldCheckboxClassification } from './FieldCheckboxClassification.styled'

import { FormSideEffectsContext } from '../../contexts/FormSideEffectsContext'

import FieldCheckbox from '../FieldCheckbox'

export const FieldCheckboxClassification = () => {
  const { sideEffectsIsPregnant, sideEffectsSeverity } = React.useContext(FormSideEffectsContext)

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
