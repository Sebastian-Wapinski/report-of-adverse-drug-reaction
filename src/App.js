import React from 'react'

import DataContainer from './components/DataContainer'
import PageMedicForm from './pages/PageMedicForm'
import PagePatientForm from './pages/PagePatientForm'
import PageSideEffectsForm from './pages/PageSideEffectsForm'
import PageClassificationForm from './pages/PageClassificationForm'
import PageMedicinesForm from './pages/PageMedicinesForm'

import { ChangePageContext } from './contexts/ChangePageContext'

const App = () => {
  const { pageSide } = React.useContext(ChangePageContext)

  return (
    <DataContainer>
      {
        pageSide === 1 ?
          <PageMedicForm />
          :
          pageSide === 2 ?
            <PagePatientForm />
            :
            pageSide === 3 ?
              <PageSideEffectsForm />
              :
              pageSide === 4 ?
                <PageClassificationForm />
                :
                pageSide === 5 ?
                  <PageMedicinesForm />
                  :
                  null
      }
    </DataContainer>
  )
}

export default App
