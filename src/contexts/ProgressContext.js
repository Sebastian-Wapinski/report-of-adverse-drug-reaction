import React from 'react'
import PropTypes from 'prop-types'

import { formMedicData } from '../data/formMedicData'
import { formPatientData } from '../data/formPatientData'
import { formSideEffectsData } from '../data/formSideEffectsData'
import { formClassificationData } from '../data/formClassificationData'
import { formMedicinesData } from '../data/formMedicinesData'

import { FormMedicContext } from '../contexts/FormMedicContext'
import { FormPatientContext } from '../contexts/FormPatientContext'
import { FormSideEffectsContext } from '../contexts/FormSideEffectsContext'
import { FormClassificationContext } from '../contexts/FormClassificationContext'
import { FormMedicinesContext } from '../contexts/FormMedicinesContext'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const init = {
  requiredFields: 0,
  correctlyValidatedFields: 0,

  dispatch: errorMsg
}

export const ProgressContext = React.createContext(init)

export const ProgressContextProvider = (props) => {
  const { children } = props

  const [requiredFields, setRequiredFields] = React.useState(init.requiredFields)
  const [correctlyValidatedFields, setCorrectlyValidatedFields] = React.useState(init.correctlyValidatedFields)

  const sumRequiredFields = React.useCallback((...forms) => {
    return forms.reduce((acc, elem) => {
      return acc + (elem.isRequired ? 1 : 0)
    }, 0)
  }, [])

  React.useEffect(() => {
    setRequiredFields(sumRequiredFields(...formMedicData, ...formPatientData, ...formSideEffectsData, ...formClassificationData, ...formMedicinesData))
  }, [sumRequiredFields])

  const createNameListOfIsRequiredPositions = React.useCallback((...formsData) => {
    return formsData
      .filter(elem => elem.isRequired)
      .map(elem => elem.name + 'IsValid')
  }, [])

  const sumCorrectlyValidatedFields = React.useCallback((...contexts) => {
    const nameListOfIsRequiredPositions = createNameListOfIsRequiredPositions(...formMedicData, ...formPatientData, ...formSideEffectsData, ...formClassificationData, ...formMedicinesData)
    return contexts.reduce((sum, contextsObj) => {
      nameListOfIsRequiredPositions.forEach(property => {
        if (contextsObj[property] === true) {
          sum++
        }
      })
      return sum
    }, 0)
  }, [createNameListOfIsRequiredPositions])

  const formMedicContext = React.useContext(FormMedicContext)
  const formPatientContext = React.useContext(FormPatientContext)
  const formSideEffectsContext = React.useContext(FormSideEffectsContext)
  const formClassificationContext = React.useContext(FormClassificationContext)
  const formMedicinesContext = React.useContext(FormMedicinesContext)

  React.useEffect(() => {
    setCorrectlyValidatedFields(sumCorrectlyValidatedFields(formMedicContext, formPatientContext, formSideEffectsContext, formClassificationContext, formMedicinesContext))
  }, [formClassificationContext, formMedicContext, formMedicinesContext, formPatientContext, formSideEffectsContext, sumCorrectlyValidatedFields])

  return (
    <ProgressContext.Provider
      value={{
        requiredFields,
        setRequiredFields,
        correctlyValidatedFields,
        setCorrectlyValidatedFields
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

ProgressContextProvider.propTypes = {
  children: PropTypes.node
}

export default ProgressContextProvider
