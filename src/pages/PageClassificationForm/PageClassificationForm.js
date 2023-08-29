import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageClassificationForm } from './PageClassificationForm.styled'

export const PageClassificationForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageClassificationForm
      {...otherProps}
    >
      4
    </StyledPageClassificationForm>
  )
}

PageClassificationForm.propTypes = {
  children: PropTypes.node
}

export default PageClassificationForm
