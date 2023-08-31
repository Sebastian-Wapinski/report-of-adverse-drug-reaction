import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './Label.styled'

export const Label = (props) => {
  const {
    children,
    isRequired,
    ...otherProps
  } = props

  return (
    <StyledLabel
      required={isRequired}
      {...otherProps}
    >
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool
}

export default Label
