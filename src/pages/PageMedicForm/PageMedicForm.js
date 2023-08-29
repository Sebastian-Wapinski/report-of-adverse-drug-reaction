import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicForm } from './PageMedicForm.styled'

export const PageMedicForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageMedicForm
      {...otherProps}
    >
      1
    </StyledPageMedicForm>
  )
}

PageMedicForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicForm
