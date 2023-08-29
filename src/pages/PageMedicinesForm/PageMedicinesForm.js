import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicinesForm } from './PageMedicinesForm.styled'

export const PageMedicinesForm = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageMedicinesForm
      {...otherProps}
    >
      5
    </StyledPageMedicinesForm>
  )
}

PageMedicinesForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicinesForm
