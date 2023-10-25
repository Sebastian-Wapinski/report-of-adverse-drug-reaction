// import React from 'react'
// import PropTypes from 'prop-types'
// // import { FormContext } from './FormContext'
// // import { FormMedicContext } from './FormMedicContext'

// const errorProvider = () => {
//   console.error('Forgot pass provider form')
// }

// const init = {
//   contextForm: 'start',
//   setContextForm: errorProvider
// }

// export const ChangeFormContext = React.createContext(init)

// export const ProviderChangeFormContext = (props) => {
//   const { children } = props

//   const [contextForm, setContextForm] = React.useState(init.contextForm)

//   return (
//     <ChangeFormContext.Provider
//       value={{
//         contextForm,
//         setContextForm
//       }}
//     >
//       {children}
//     </ChangeFormContext.Provider>
//   )
// }

// ProviderChangeFormContext.propTypes = {
//   children: PropTypes.node
// }

// export default ProviderChangeFormContext
