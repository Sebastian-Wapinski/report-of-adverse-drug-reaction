import React from 'react'

import DataContainer from './components/DataContainer'
import PageMedicForm from './pages/PageMedicForm'
import PagePatientForm from './pages/PagePatientForm'
// import PageSideEffectsForm from './pages/PageSideEffectsForm'
// import PageClassificationForm from './pages/PageClassificationForm'
// import PageMedicinesForm from './pages/PageMedicinesForm'

import PageTitle from './components/PageTitle'
import PageSubtitle from './components/PageSubtitle'
import NextPrevPage from './components/NextPrevPage'
import CardButtonsContainer from './components/CardButtonsContainer'

import { ChangePageContext } from './contexts/ChangePageContext'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from './pages/consts'

const App = () => {
  const { pageSide } = React.useContext(ChangePageContext)

  return (
    <DataContainer>
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      <CardButtonsContainer />
      {
        pageSide === 1 ?
          <PageMedicForm />
          :
          pageSide === 2 ?
            <PagePatientForm />
            :
          //   pageSide === 3 ?
          //     <PageSideEffectsForm />
          //     :
          //     pageSide === 4 ?
          //       <PageClassificationForm />
          //       :
          //       pageSide === 5 ?
          //         <PageMedicinesForm />
          //         :
            null
      }
      <NextPrevPage />
    </DataContainer>
  )
}

export default App
