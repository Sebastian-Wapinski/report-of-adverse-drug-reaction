import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagesContainer } from './PagesContainer.styled'

export const PagesContainer = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPagesContainer
      {...otherProps}
    >
      {children}
    </StyledPagesContainer>
  )
}

PagesContainer.propTypes = {
  children: PropTypes.node
}

export default PagesContainer
