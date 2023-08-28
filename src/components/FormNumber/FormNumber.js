import React from 'react'
import PropTypes from 'prop-types'

import { StyledFormNumber } from './FormNumber.styled'

export const FormNumber = (props) => {
  const {
    children,
    pageNumber,
    ...otherProps
  } = props

  return (
    <StyledFormNumber
      {...otherProps}
    >
      {pageNumber}
    </StyledFormNumber>
  )
}

FormNumber.propTypes = {
  children: PropTypes.node,
  pageNumber: PropTypes.number
}

export default FormNumber
