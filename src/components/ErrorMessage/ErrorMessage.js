import React from 'react'
import PropTypes from 'prop-types'

import { StyledErrorMessage } from './ErrorMessage.styled'

export const ErrorMessage = (props) => {
  const {
    children
  } = props

  return (
    <StyledErrorMessage>
      {children}
    </StyledErrorMessage>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.node
}

export default ErrorMessage
