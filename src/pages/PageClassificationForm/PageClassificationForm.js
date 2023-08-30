import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageClassificationForm } from './PageClassificationForm.styled'

import { formClassificationData } from '../../data/formClassificationData'

import { FormContainer } from '../../components/FormContainer'

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
      <FormContainer
        formData={formClassificationData}
      />
    </StyledPageClassificationForm>
  )
}

PageClassificationForm.propTypes = {
  children: PropTypes.node
}

export default PageClassificationForm
