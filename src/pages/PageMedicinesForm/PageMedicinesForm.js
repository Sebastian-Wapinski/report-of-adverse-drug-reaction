import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicinesForm } from './PageMedicinesForm.styled'

import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from '../consts'

export const PageMedicinesForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageMedicinesForm
      {...otherProps}
    >
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      5
    </StyledPageMedicinesForm>
  )
}

PageMedicinesForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicinesForm
