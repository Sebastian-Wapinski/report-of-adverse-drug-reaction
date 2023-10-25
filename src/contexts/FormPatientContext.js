// import React from 'react'
// import PropTypes from 'prop-types'

// const errorMsg = () => {
//   console.error('Forgot pass provider')
// }

// const init = {
//   initials: '',
//   birthDate: '',
//   sex: false,
//   age: 0,
//   height: 0,
//   weight: 0,

//   initialsIsValid: false,
//   birthDateIsValid: false,
//   sexIsValid: false,
//   ageIsValid: false,
//   heightIsValid: false,
//   weightIsValid: false,

//   dispatch: errorMsg
// }

// export const FormPatientContext = React.createContext(init)

// export const FormPatientContextProvider = (props) => {
//   const { children } = props

//   const reducer = (state, { name, value }) => {
//     return { ...state, [name]: value }
//   }

//   const [formPatientState, dispatch] = React.useReducer(reducer, init)

//   return (
//     <FormPatientContext.Provider
//       value={{
//         ...formPatientState,
//         dispatch
//       }}
//     >
//       {children}
//     </FormPatientContext.Provider>
//   )
// }

// FormPatientContextProvider.propTypes = {
//   children: PropTypes.node
// }

// export default FormPatientContextProvider
