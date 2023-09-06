import React from 'react'

import { PageTitle } from '../components/PageTitle'
import { PageSubtitle } from '../components/PageSubtitle'
import { CardButtonsContainer } from '../components/CardButtonsContainer'
import { ProgressBar } from '../components/ProgressBar'
import { Page } from '../components/Page'
import { NextPrevPage } from '../components/NextPrevPage'

import { PAGE_SUBTITLE, PAGE_TITLE } from './consts'

export const FormPage = () => {
  return (
    <>
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
    </>
  )
}

export default FormPage
