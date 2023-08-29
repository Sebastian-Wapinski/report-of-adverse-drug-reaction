import React from 'react'
import PropTypes from 'prop-types'

import { StyledFormField } from './FormField.styled'

import FieldText from '../FieldText'
import FieldNumber from '../FieldNumber'
import FieldRange from '../FieldRange/FieldRange'

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

  const { setFieldData } = React.useContext(RenderingFieldContext)

  React.useEffect(() => {
    setFieldData(() => fieldData)
  }, [fieldData, setFieldData])

  return (
    <StyledFormField
      {...otherProps}
    >
      {
        type === 'text' ?
          <FieldText />
          :
          type === 'number' ?
            <FieldNumber />
            :
            type === 'range' ?
              <FieldRange />
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
