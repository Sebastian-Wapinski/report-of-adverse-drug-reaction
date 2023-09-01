import React from 'react'
import PropTypes from 'prop-types'

import ProviderChangePageContext from './ChangePageContext'
import FormMedicContextProvider from './FormMedicContext'
import ProviderChangeFormContext from './ChangeFormContext'
import FormPatientContextProvider from './FormPatientContext'
import FormSideEffectsContextProvider from './FormSideEffectsContext'
import FormClassificationContextProvider from './FormClassificationContext'
import FormMedicinesContextProvider from './FormMedicinesContext'

export const ProvideContexts = (props) => {
  const { children } = props

  return (
    <ProviderChangePageContext>
      <FormMedicContextProvider>
        <ProviderChangeFormContext>
          <FormPatientContextProvider>
            <FormSideEffectsContextProvider>
              <FormClassificationContextProvider>
                <FormMedicinesContextProvider>
                  {children}
                </FormMedicinesContextProvider>
              </FormClassificationContextProvider>
            </FormSideEffectsContextProvider>
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
