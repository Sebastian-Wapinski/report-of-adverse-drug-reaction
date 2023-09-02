import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicForm } from './PageMedicForm.styled'

import { formMedicData } from '../../data/formMedicData'

import FormContainer from '../../components/FormContainer'

export const PageMedicForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageMedicForm
      {...otherProps}
    >
      <FormContainer
        formData={formMedicData}
      />
    </StyledPageMedicForm>
  )
}

PageMedicForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicForm
