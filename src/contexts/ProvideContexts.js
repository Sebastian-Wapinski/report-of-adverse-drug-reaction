import React from 'react'
import PropTypes from 'prop-types'

import ProviderChangePageContext from './ChangePageContext'
import ProgressContextProvider from './ProgressContext'
import FormContextProvider from './FormContext'

export const ProvideContexts = (props) => {
  const { children } = props

  return (
    <ProviderChangePageContext>
      <FormContextProvider>
        <ProgressContextProvider>
          {children}
        </ProgressContextProvider>
      </FormContextProvider>
    </ProviderChangePageContext>
  )
}

ProvideContexts.propTypes = {
  children: PropTypes.node
}

export default ProvideContexts
