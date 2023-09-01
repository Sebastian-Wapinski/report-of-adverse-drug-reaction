import React from 'react'
import PropTypes from 'prop-types'

import { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer, StyleDivToggleFalseList } from './FieldList.styled'

import { Label } from '../Label'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { validateForm } from '../../validation/validateForm'

export const FieldList = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, list = [], isRequired, textErrorMessage } = fieldData

  const { contextForm } = React.useContext(ChangeFormContext)
  const formContext = React.useContext(contextForm)
  const { dispatch } = formContext

  const [activeList, setActiveList] = React.useState(false)

  const toggleList = (e) => {
    setActiveList(!activeList)
  }

  // const handleClickInside = (e) => {
  //   e.stopPropagation()
  // }

  const handleClickOutside = () => {
    setActiveList(false)
  }

  const changeState = (e) => {
    dispatch({ name: 'result', value: e.target.innerText })
    toggleList()
    validateForm({ name, innerText: e.target.innerText }, dispatch, fieldData)
  }

  return (
    <>
      <StyleDivToggleFalseList
        onClick={activeList ? handleClickOutside : null}
        $activeList={!!activeList}
      >
      </StyleDivToggleFalseList>
      <StyledFieldList
        $activeList={!!activeList}
        {...otherProps}
      >
        <Label
          htmlFor={id}
          isRequired={isRequired}
          onClick={toggleList}
        >
          {label}
        </Label>
        <InputListContainer>
          <StyledInput
            id={id}
            name={name}
            onClick={toggleList}
            errorMessage={textErrorMessage}
          />
          <ListContainer>
            {
          list.map(listPosition => {
            const { id, resultType } = listPosition
            return (
              <ListPosition
                key={id}
                onClick={changeState}
              >
                {resultType}
              </ListPosition>
            )
          })
        }
          </ListContainer>
        </InputListContainer>
      </StyledFieldList>
    </>
  )
}

FieldList.propTypes = {
  children: PropTypes.node
}

export default FieldList
