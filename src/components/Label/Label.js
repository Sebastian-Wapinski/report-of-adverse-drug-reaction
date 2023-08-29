import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './Label.styled'

export const Label = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledLabel
      {...otherProps}
    >
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.node
}

export default Label
