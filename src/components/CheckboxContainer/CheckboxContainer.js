import React from 'react'
import PropTypes from 'prop-types'

import { StyledCheckboxContainer } from './CheckboxContainer.styled'

export const CheckboxContainer = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledCheckboxContainer
      {...otherProps}
    >
      {children}
    </StyledCheckboxContainer>
  )
}

CheckboxContainer.propTypes = {
  children: PropTypes.node
}

export default CheckboxContainer
