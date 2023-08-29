import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagePatientForm } from './PagePatientForm.styled'
import { FormContainer } from '../../components/FormContainer'
import { formPatientData } from '../../data/formPatientData'

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
      <FormContainer
        formData={formPatientData}
      />
    </StyledPagePatientForm>
  )
}

PagePatientForm.propTypes = {
  children: PropTypes.node
}

export default PagePatientForm
