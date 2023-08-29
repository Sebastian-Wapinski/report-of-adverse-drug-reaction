import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageSideEffectsForm } from './PageSideEffectsForm.styled'

export const PageSideEffectsForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageSideEffectsForm
      {...otherProps}
    >
      3
    </StyledPageSideEffectsForm>
  )
}

PageSideEffectsForm.propTypes = {
  children: PropTypes.node
}

export default PageSideEffectsForm
