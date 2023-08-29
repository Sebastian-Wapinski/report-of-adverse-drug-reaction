import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'

export const Input = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledInput
      {...otherProps}
    >
      {children}
    </StyledInput>
  )
}

Input.propTypes = {
  children: PropTypes.node
}

export default Input
