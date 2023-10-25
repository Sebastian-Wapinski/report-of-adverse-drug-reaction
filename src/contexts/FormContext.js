import React from 'react'
import PropTypes from 'prop-types'

const errorMsg = () => {
  console.error('Forgot pass provider')
}

const init = {
  medicData: {
    doctorFirstName: '',
    doctorLastName: '',
    cityName: '',
    streetName: '',
    streetNumber: '',
    medicalFacility: '',
    email: '',
    phone: '',
    zipCode: '',

    doctorFirstNameIsValid: false,
    doctorLastNameIsValid: false,
    cityNameIsValid: false,
    streetNameIsValid: false,
    streetNumberIsValid: false,
    medicalFacilityIsValid: false,
    emailIsValid: false,
    phoneIsValid: false,
    zipCodeIsValid: false
  },
  patientData: {
    initials: '',
    birthDate: '',
    sex: false,
    age: 0,
    height: 0,
    weight: 0,

    initialsIsValid: false,
    birthDateIsValid: false,
    sexIsValid: false,
    ageIsValid: false,
    heightIsValid: false,
    weightIsValid: false
  },
  sideEffects: {
    sideEffectOccurDate: '',
    sideEffectsDescription: '',
    sideEffectsIsPregnant: false,
    sideEffectsSeverity: false,

    sideEffectOccurDateIsValid: false,
    sideEffectsDescriptionIsValid: false
  },
  classification: {
    isDecease: false,
    isDangerToLife: false,
    isDisability: false,
    isFetalInjury: false,
    isOther: false,

    result: '',
    resultIsValid: false
  },
  medicines: {
    medicineName: '',
    medicineDose: '',
    medicineAdministration: '',
    medicineStartsDate: '',

    medicineNameIsValid: false,
    medicineDoseIsValid: false,
    medicineAdministrationIsValid: false,
    medicineStartsDateIsValid: false

  },
  dispatch: errorMsg
}

export const FormContext = React.createContext(init)

export const FormContextProvider = (props) => {
  const { children } = props

  const reducer = (state, { pageName, name, value }) => {
    return { ...state, [pageName]: { ...state[pageName], [name]: value } }
  }

  const [formState, dispatch] = React.useReducer(reducer, init)

  const medicData = formState.medicData

  return (
    <FormContext.Provider
      value={{
        ...formState,
        medicData,
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
