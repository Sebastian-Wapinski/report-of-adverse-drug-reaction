import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    onClick,
    isActive,
    className,
    disabled
  } = props

  return (
    <StyledButton
      onClick={onClick}
      $isActive={isActive}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default Button
