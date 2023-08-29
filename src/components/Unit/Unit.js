import React from 'react'
import PropTypes from 'prop-types'

import { StyledUnit } from './Unit.styled'

export const Unit = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledUnit
      {...otherProps}
    >
      {children}
    </StyledUnit>
  )
}

Unit.propTypes = {
  children: PropTypes.node
}

export default Unit
