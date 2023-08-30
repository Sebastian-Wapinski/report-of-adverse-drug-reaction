import React from 'react'
import PropTypes from 'prop-types'

import { StyledRadioContainer } from './RadioContainer.styled'

export const RadioContainer = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledRadioContainer
      {...otherProps}
    >
      {children}
    </StyledRadioContainer>
  )
}

RadioContainer.propTypes = {
  children: PropTypes.node
}

export default RadioContainer
