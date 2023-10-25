import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'
import { validateForm } from '../../validation/validateForm'
import { RenderingFieldContext } from '../../contexts/RenderingFieldContext'
// import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { setErrorMessageConditionalExpression } from '../../helper/helper'
import { FormContext } from '../../contexts/FormContext'

export const Input = (props) => {
  const {
    errorMessage,
    name,
    type,
    className,
    id,
    placeholder,
    checked,
    min,
    max,
    step,
    style,
    disabled,
    onClick,
    value
  } = props

  const { fieldData } = React.useContext(RenderingFieldContext)
  const { pageName } = fieldData

  // const { contextForm } = React.useContext(ChangeFormContext)
  const { dispatch, [pageName]: stateData } = React.useContext(FormContext)

  const handleChangeData = React.useCallback((e) => {
    if (type === 'toggle' || type === 'checkboxClassification' || type === 'checkbox') {
      dispatch({ pageName, name, value: e.target.checked })
      return
    }

    if (type === 'range' || type === 'number') {
      dispatch({ pageName, name, value: Number(e.target.value) })
      validateForm(e.target, dispatch, fieldData)
      return
    }

    dispatch({ pageName, name, value: e.target.value })
    validateForm(e.target, dispatch, fieldData)
  }, [type, pageName, name, dispatch, fieldData])

  return (
    <>
      <StyledInput
        onChange={handleChangeData}
        value={value || stateData[name]}
        name={name}
        autoComplete={'one-time-code'}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        min={min}
        checked={checked}
        max={max}
        step={step}
        style={style}
        disabled={disabled}
        onClick={onClick}
      />
      {
        type === 'radio' ||
          type === 'range' ||
            type === 'number' ?
          null
          :
          setErrorMessageConditionalExpression(stateData[name + 'IsValid'], stateData[name], errorMessage, 'string')
    }
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Input
