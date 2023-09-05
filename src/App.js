import React from 'react'

import DataContainer from './components/DataContainer'

import PageTitle from './components/PageTitle'
import PageSubtitle from './components/PageSubtitle'
import NextPrevPage from './components/NextPrevPage'
import CardButtonsContainer from './components/CardButtonsContainer'
import Page from './components/Page'
import ProgressBar from './components/ProgressBar'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from './pages/consts'

const App = () => {
  return (
    <DataContainer>
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      <CardButtonsContainer />
      <Page />
      <ProgressBar />
      <NextPrevPage />
    </DataContainer>
  )
}

export default App
