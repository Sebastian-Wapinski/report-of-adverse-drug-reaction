import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styled'

export const Text = (props) => {
  const {
    children,
    text,
    ...otherProps
  } = props

  return (
    <StyledText
      {...otherProps}
    >
      {text}
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
}

export default Text
