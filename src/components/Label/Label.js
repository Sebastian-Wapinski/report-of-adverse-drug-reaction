import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './Label.styled'

export const Label = (props) => {
  const {
    children,
    isRequired,
    htmlFor,
    className
  } = props

  return (
    <StyledLabel
      required={isRequired}
      htmlFor={htmlFor}
      className={className}
    >
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  htmlFor: PropTypes.string,
  className: PropTypes.string
}

export default Label
