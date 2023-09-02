import React from 'react'
import PropTypes from 'prop-types'

import { StyledPage } from './Page.styled'

import { FormContainer } from '../FormContainer'

export const Page = (props) => {
  const {
    pageData,
    ...otherProps
  } = props

  return (
    <StyledPage
      {...otherProps}
    >
      <FormContainer
        formData={pageData}
      />
    </StyledPage>
  )
}

Page.propTypes = {
  pageData: PropTypes.array
}

export default Page
