import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    onClick,
    isActive,
    ...otherProps
  } = props

  return (
    <StyledButton
      onClick={onClick}
      $isActive={isActive}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool
}

export default Button
