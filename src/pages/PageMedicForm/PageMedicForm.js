import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicForm } from './PageMedicForm.styled'

import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from '../consts'
import NextPrevPage from '../../components/NextPrevPage/NextPrevPage'

export const PageMedicForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageMedicForm
      {...otherProps}
    >
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      1
      <NextPrevPage />
    </StyledPageMedicForm>
  )
}

PageMedicForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicForm
