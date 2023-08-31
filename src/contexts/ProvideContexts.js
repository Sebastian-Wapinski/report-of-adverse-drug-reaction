import React from 'react'
import PropTypes from 'prop-types'

import ProviderChangePageContext from './ChangePageContext'
import FormMedicContextProvider from './FormMedicContext'
import ProviderChangeFormContext from './ChangeFormContext'
import FormPatientContextProvider from './FormPatientContext'

export const ProvideContexts = (props) => {
  const { children } = props

  return (
    <ProviderChangePageContext>
      <FormMedicContextProvider>
        <ProviderChangeFormContext>
          <FormPatientContextProvider>
            {children}
          </FormPatientContextProvider>
        </ProviderChangeFormContext>
      </FormMedicContextProvider>
    </ProviderChangePageContext>
  )
}

ProvideContexts.propTypes = {
  children: PropTypes.node
}

export default ProvideContexts
