import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styled'

export const Text = (props) => {
  const {
    children,
    text,
    isRequired,
    ...otherProps
  } = props

  return (
    <StyledText
      required={isRequired}
      {...otherProps}
    >
      {text}
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  isRequired: PropTypes.bool
}

export default Text
