import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styled'

export const Text = (props) => {
  const {
    text,
    isRequired,
    className
  } = props

  return (
    <StyledText
      required={isRequired}
      className={className}
    >
      {text}
    </StyledText>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool
}

export default Text
