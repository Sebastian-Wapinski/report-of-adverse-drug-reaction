import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagePatientForm } from './PagePatientForm.styled'

export const PagePatientForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPagePatientForm
      {...otherProps}
    >
      2
    </StyledPagePatientForm>
  )
}

PagePatientForm.propTypes = {
  children: PropTypes.node
}

export default PagePatientForm
