import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldCheckboxClassification } from './FieldCheckboxClassification.styled'
import { FormSideEffectsContext } from '../../contexts/FormSideEffectsContext'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'

export const FieldCheckboxClassification = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { sideEffectsIsPregnant, sideEffectsSeverity } = React.useContext(FormSideEffectsContext)

  return (
    <StyledFieldCheckboxClassification
      {...otherProps}
    >
      {
        sideEffectsSeverity ?
          <FieldCheckbox
            isDisabled={{
              isFetalInjury: {
                isDisabledState: !sideEffectsIsPregnant
              }
            }}
          />
          :
          null
      }
    </StyledFieldCheckboxClassification>
  )
}

FieldCheckboxClassification.propTypes = {
  children: PropTypes.node
}

export default FieldCheckboxClassification
