import React from 'react'
import PropTypes from 'prop-types'

import { StyledFormContainer } from './FormContainer.styled'

import FormField from '../FormField'
import ProviderRenderingFieldContext from '../../contexts/RenderingFieldContext'

export const FormContainer = (props) => {
  const {
    children,
    formData,
    ...otherProps
  } = props

  return (
    <StyledFormContainer
      autoComplete={'off'}
      {...otherProps}
    >
      {
        formData.map(field => {
          const { id } = field

          return (
            <ProviderRenderingFieldContext
              key={id}
            >
              <FormField
                fieldData={field}
              />
            </ProviderRenderingFieldContext>
          )
        })
      }
    </StyledFormContainer>
  )
}

FormContainer.propTypes = {
  children: PropTypes.node,
  formData: PropTypes.array.isRequired
}

export default FormContainer
