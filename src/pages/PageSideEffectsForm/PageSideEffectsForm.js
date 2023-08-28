import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageSideEffectsForm } from './PageSideEffectsForm.styled'

import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'
import NextPrevPage from '../../components/NextPrevPage'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from '../consts'

export const PageSideEffectsForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageSideEffectsForm
      {...otherProps}
    >
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      3
      <NextPrevPage />
    </StyledPageSideEffectsForm>
  )
}

PageSideEffectsForm.propTypes = {
  children: PropTypes.node
}

export default PageSideEffectsForm
