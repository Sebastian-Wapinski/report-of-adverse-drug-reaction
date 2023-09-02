import React from 'react'
import PropTypes from 'prop-types'

import { StyledProgressBar, ProgressPercentageBar, ProgressPercentageNumber } from './ProgressBar.styled'
import { ProgressContext } from '../../contexts/ProgressContext'

export const ProgressBar = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const {
    requiredFields,
    correctlyValidatedFields
  } = React.useContext(ProgressContext)

  return (
    <StyledProgressBar
      {...otherProps}
    >
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

ProgressBar.propTypes = {
  children: PropTypes.node
}

export default ProgressBar
