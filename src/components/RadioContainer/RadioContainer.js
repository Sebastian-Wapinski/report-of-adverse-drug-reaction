import React from 'react'
import PropTypes from 'prop-types'

import { StyledRadioContainer } from './RadioContainer.styled'

export const RadioContainer = (props) => {
  const {
    children
  } = props

  return (
    <StyledRadioContainer>
      {children}
    </StyledRadioContainer>
  )
}

RadioContainer.propTypes = {
  children: PropTypes.node
}

export default RadioContainer
