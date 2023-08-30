import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageMedicinesForm } from './PageMedicinesForm.styled'

import { FormContainer } from '../../components/FormContainer'

import { formMedicinesData } from '../../data/formMedicinesData'

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
      <FormContainer
        formData={formMedicinesData}
      />
    </StyledPageMedicinesForm>
  )
}

PageMedicinesForm.propTypes = {
  children: PropTypes.node
}

export default PageMedicinesForm
