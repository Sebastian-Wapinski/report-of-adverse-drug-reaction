import React from 'react'
import PropTypes from 'prop-types'
import { formMedicData } from '../data/formMedicData'
import { formPatientData } from '../data/formPatientData'
import { formSideEffectsData } from '../data/formSideEffectsData'
import { formClassificationData } from '../data/formClassificationData'
import { formMedicinesData } from '../data/formMedicinesData'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const createInitState = (data, object) => {
  data.forEach((formData) => {
    object[formData[1].pageName] = []

    formData.forEach((item) => {
      if (item.type !== 'checkboxClassification') {
        object[item.pageName][item.name] = (
          item.type === 'range'
            ? 0 :
            item.type === 'text'
              ? '' :
              item.type === 'radio' || item.type === 'toggle' ? false : ''
        )
      }

      if (item.type !== 'toggle' && item.type !== 'checkboxClassification') {
        object[item.pageName][`${item.name}IsValid`] = false
      }

      if (item.type === 'checkboxClassification') {
        item.checkboxBtn.forEach(checkboxItem => {
          object[item.pageName][checkboxItem.checkboxName] = false
        })
      }
    })
  })
}

const init = { dispatch: errorMsg }

const allFormsData = [formMedicData, formPatientData, formSideEffectsData, formClassificationData, formMedicinesData]

createInitState(allFormsData, init)

export const FormContext = React.createContext(init)

export const FormContextProvider = (props) => {
  const { children } = props

  const reducer = (state, { pageName, name, value }) => {
    return { ...state, [pageName]: { ...state[pageName], [name]: value } }
  }

  const [formState, dispatch] = React.useReducer(reducer, init)

  return (
    <FormContext.Provider
      value={{
        ...formState,
        dispatch
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormContextProvider.propTypes = {
  children: PropTypes.node
}

export default FormContextProvider
