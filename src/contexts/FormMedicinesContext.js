// import React from 'react'
// import PropTypes from 'prop-types'

// const errorMsg = () => {
//   console.error('Forgot pass provider')
// }

// const init = {
//   medicineName: '',
//   medicineDose: '',
//   medicineAdministration: '',
//   medicineStartsDate: '',

//   medicineNameIsValid: false,
//   medicineDoseIsValid: false,
//   medicineAdministrationIsValid: false,
//   medicineStartsDateIsValid: false,

//   dispatch: errorMsg
// }

// export const FormMedicinesContext = React.createContext(init)

// export const FormMedicinesContextProvider = (props) => {
//   const { children } = props

//   const reducer = (state, { name, value }) => {
//     return { ...state, [name]: value }
//   }

//   const [formMedicinesState, dispatch] = React.useReducer(reducer, init)

//   return (
//     <FormMedicinesContext.Provider
//       value={{
//         ...formMedicinesState,
//         dispatch
//       }}
//     >
//       {children}
//     </FormMedicinesContext.Provider>
//   )
// }

// FormMedicinesContextProvider.propTypes = {
//   children: PropTypes.node
// }

// export default FormMedicinesContextProvider
