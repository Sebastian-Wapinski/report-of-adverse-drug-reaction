import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageSideEffectsForm } from './PageSideEffectsForm.styled'
import { FormContainer } from '../../components/FormContainer'
import { formSideEffectsData } from '../../data/formSideEffectsData'

export const PageSideEffectsForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageSideEffectsForm
      {...otherProps}
    >
      <FormContainer
        formData={formSideEffectsData}
      />
    </StyledPageSideEffectsForm>
  )
}

PageSideEffectsForm.propTypes = {
  children: PropTypes.node
}

export default PageSideEffectsForm
