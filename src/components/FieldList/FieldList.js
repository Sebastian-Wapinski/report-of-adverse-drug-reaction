import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer } from './FieldList.styled'

import { Label } from '../Label'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

export const FieldList = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, list = [] } = fieldData

  return (
    <StyledFieldList
      {...otherProps}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <InputListContainer>
        <StyledInput
          id={id}
          name={name}
        />
        <ListContainer>
          {
          list.map(listPosition => {
            const { id, resultType } = listPosition
            return (
              <ListPosition
                key={id}
              >
                {resultType}
              </ListPosition>
            )
          })
        }
        </ListContainer>
      </InputListContainer>
    </StyledFieldList>
  )
}

FieldList.propTypes = {
  children: PropTypes.node
}

export default FieldList
