import React from 'react'
import PropTypes from 'prop-types'

import { StyledFormField } from './FormField.styled'

import { checkTypeData } from '../../data/checkTypeData'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FormField = (props) => {
  const {
    children,
    fieldData,
    ...otherProps
  } = props

  const {
    type = 'text'
  } = fieldData

  const { fieldData: contextFieldData, setFieldData } = React.useContext(RenderingFieldContext)

  React.useEffect(() => {
    setFieldData(() => JSON.parse(JSON.stringify(fieldData)))
  }, [fieldData, setFieldData])

  return (
    <StyledFormField
      {...otherProps}
    >
      {
        Object.keys(contextFieldData).length !== 0 ?
          checkTypeData.map(arrayPosition => {
            const { checkType, useField } = arrayPosition

            return (
              checkType === type ?
                useField
                :
                null
            )
          })
          :
          null
      }
    </StyledFormField>
  )
}

FormField.propTypes = {
  children: PropTypes.node,
  fieldData: PropTypes.object
}

export default FormField
