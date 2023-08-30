import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldTextarea, Textarea } from './FieldTextarea.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import Label from '../Label'

export const FieldTextarea = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData: { id, name, label, rows = 0, cols = 0 } } = React.useContext(RenderingFieldContext)

  return (
    <StyledFieldTextarea
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <Textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
      />
    </StyledFieldTextarea>
  )
}

FieldTextarea.propTypes = {
  children: PropTypes.node
}

export default FieldTextarea
