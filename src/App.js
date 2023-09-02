import React from 'react'

import DataContainer from './components/DataContainer'

import PageTitle from './components/PageTitle'
import PageSubtitle from './components/PageSubtitle'
import NextPrevPage from './components/NextPrevPage'
import CardButtonsContainer from './components/CardButtonsContainer'
// import PagesContainer from './components/PagesContainer'
import Page from './components/Page'

import { ChangePageContext } from './contexts/ChangePageContext'

import { pagesData } from './data/pagesData'

import {
  PAGE_TITLE,
  PAGE_SUBTITLE
} from './pages/consts'
import ProgressBar from './components/ProgressBar/ProgressBar'

const App = () => {
  const { pageSide } = React.useContext(ChangePageContext)

  const currentPage = pagesData.find(({ pageSide: pageSideData }) => pageSide === pageSideData)
  const currentPageData = currentPage.pageData

  return (
    <DataContainer>
      <PageTitle>
        {PAGE_TITLE}
      </PageTitle>
      <PageSubtitle>
        {PAGE_SUBTITLE}
      </PageSubtitle>
      <CardButtonsContainer />
      <Page pageData={currentPageData}/>
      <ProgressBar />
      <NextPrevPage />
    </DataContainer>
  )
}

export default App
