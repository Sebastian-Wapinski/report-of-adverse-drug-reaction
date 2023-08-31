import React from 'react'
import PropTypes from 'prop-types'

import ProviderChangePageContext from './ChangePageContext'
import FormMedicContextProvider from './FormMedicContext'

export const ProvideContexts = (props) => {
  const { children } = props

  return (
    <ProviderChangePageContext>
      <FormMedicContextProvider>
        {children}
      </FormMedicContextProvider>
    </ProviderChangePageContext>
  )
}

ProvideContexts.propTypes = {
  children: PropTypes.node
}

export default ProvideContexts
