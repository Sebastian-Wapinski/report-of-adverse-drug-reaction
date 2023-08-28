import React from 'react'
import PropTypes from 'prop-types'

import { StyledPagePatientForm } from './PagePatientForm.styled'

import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'
import NextPrevPage from '../../components/NextPrevPage'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from '../consts'

export const PagePatientForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPagePatientForm
      {...otherProps}
    >
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      2
      <NextPrevPage />
    </StyledPagePatientForm>
  )
}

PagePatientForm.propTypes = {
  children: PropTypes.node
}

export default PagePatientForm
