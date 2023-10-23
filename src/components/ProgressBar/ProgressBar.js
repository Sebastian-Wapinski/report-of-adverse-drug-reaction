import React from 'react'

import { StyledProgressBar, ProgressPercentageBar, ProgressPercentageNumber } from './ProgressBar.styled'
import { ProgressContext } from '../../contexts/ProgressContext'

export const ProgressBar = () => {
  const {
    requiredFields,
    correctlyValidatedFields
  } = React.useContext(ProgressContext)

  return (
    <StyledProgressBar>
      <ProgressPercentageBar
        $widthPercentage={correctlyValidatedFields ? ((correctlyValidatedFields / requiredFields) * 100) : false}
      >
      </ProgressPercentageBar>
      <ProgressPercentageNumber>
        {((correctlyValidatedFields / requiredFields) * 100).toFixed(2) + '%'}
      </ProgressPercentageNumber>
    </StyledProgressBar>
  )
}

export default ProgressBar
