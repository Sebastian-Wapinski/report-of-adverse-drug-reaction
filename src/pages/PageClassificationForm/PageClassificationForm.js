import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageClassificationForm } from './PageClassificationForm.styled'

import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'
import NextPrevPage from '../../components/NextPrevPage'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from '../consts'

export const PageClassificationForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageClassificationForm
      {...otherProps}
    >
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      4
      <NextPrevPage />
    </StyledPageClassificationForm>
  )
}

PageClassificationForm.propTypes = {
  children: PropTypes.node
}

export default PageClassificationForm
