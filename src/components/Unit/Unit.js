import React from 'react'
import PropTypes from 'prop-types'

import { StyledUnit } from './Unit.styled'

export const Unit = (props) => {
  const {
    children
  } = props

  return (
    <StyledUnit>
      {children}
    </StyledUnit>
  )
}

Unit.propTypes = {
  children: PropTypes.node
}

export default Unit
