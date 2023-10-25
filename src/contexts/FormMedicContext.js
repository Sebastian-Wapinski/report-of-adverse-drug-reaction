// import React from 'react'
// import PropTypes from 'prop-types'

// const errorMsg = () => {
//   console.error('Forgot pass provider')
// }

// const init = {
//   doctorFirstName: '',
//   doctorLastName: '',
//   cityName: '',
//   streetName: '',
//   streetNumber: '',
//   medicalFacility: '',
//   email: '',
//   phone: '',
//   zipCode: '',

//   doctorFirstNameIsValid: false,
//   doctorLastNameIsValid: false,
//   cityNameIsValid: false,
//   streetNameIsValid: false,
//   streetNumberIsValid: false,
//   medicalFacilityIsValid: false,
//   emailIsValid: false,
//   phoneIsValid: false,
//   zipCodeIsValid: false,

//   dispatch: errorMsg
// }

// export const FormMedicContext = React.createContext(init)

// export const FormMedicContextProvider = (props) => {
//   const { children } = props

//   const reducer = (state, { name, value }) => {
//     return { ...state, [name]: value }
//   }

//   const [formMedicState, dispatch] = React.useReducer(reducer, init)

//   return (
//     <FormMedicContext.Provider
//       value={{
//         ...formMedicState,
//         dispatch
//       }}
//     >
//       {children}
//     </FormMedicContext.Provider>
//   )
// }

// FormMedicContextProvider.propTypes = {
//   children: PropTypes.node
// }

// export default FormMedicContextProvider
