import React from 'react'

import { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer, StyleDivToggleFalseList, StyledLabel } from './FieldList.styled'

import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'

import { validateForm } from '../../validation/validateForm'
import { FormContext } from '../../contexts/FormContext'

export const FieldList = () => {
  const { fieldData } = React.useContext(RenderingFieldContext)
  const { id, name, label, list = [], isRequired, textErrorMessage, pageName } = fieldData

  const { dispatch, [pageName]: stateData } = React.useContext(FormContext)
  const { result } = stateData

  const [activeList, setActiveList] = React.useState(false)

  const toggleList = (e) => {
    setActiveList(!activeList)
  }

  const handleClickOutside = () => {
    setActiveList(false)
  }

  const changeState = (e) => {
    dispatch({ pageName: 'classification', name: 'result', value: e.target.innerText })
    toggleList()
    validateForm({ name, innerText: e.target.innerText }, dispatch, fieldData)
  }

  return (
    <>
      <StyleDivToggleFalseList
        onClick={activeList ? handleClickOutside : null}
        $activeList={activeList}
      />
      <StyledFieldList
        $activeList={activeList}
      >
        <StyledLabel
          htmlFor={id}
          isRequired={isRequired}
          onClick={toggleList}
        >
          {label}
        </StyledLabel>
        <InputListContainer>
          <StyledInput
            id={id}
            name={name}
            onClick={toggleList}
            errorMessage={textErrorMessage}
          />
          <ListContainer>
            {
          list
            .filter(listPosition => {
              const upperResult = result.toUpperCase()
              const upperListPositionResultType = listPosition.resultType.toUpperCase().slice(0, upperResult.length)

              return upperListPositionResultType.includes(upperResult)
            })
            .map(listPosition => {
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

export default FieldList
