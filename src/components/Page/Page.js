import React from 'react'

import { StyledPage, StyledFormContainer } from './Page.styled'

import FormField from '../FormField'

import { ProviderRenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangePageContext } from '../../contexts/ChangePageContext'

import allFormsBasicData from '../../data/allFormsBasicData'

export const Page = () => {
  const { pageSide } = React.useContext(ChangePageContext)

  const currentPage = allFormsBasicData.find(({ pageNumber: pageSideData }) => pageSide === pageSideData)
  const currentPageData = currentPage.pageData

  return (
    <StyledPage>
      <StyledFormContainer
        autoComplete={'off'}
      >
        {
        currentPageData.map(field => {
          const { id } = field

          return (
            <ProviderRenderingFieldContext
              key={id}
            >
              <FormField
                fieldData={field}
              />
            </ProviderRenderingFieldContext>
          )
        })
      }
      </StyledFormContainer>
    </StyledPage>
  )
}

export default Page
