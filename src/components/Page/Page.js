import React from 'react'

import { StyledPage, StyledFormContainer } from './Page.styled'

import FormField from '../FormField'

import { ProviderRenderingFieldContext } from '../../contexts/RenderingFieldContext'
import { ChangePageContext } from '../../contexts/ChangePageContext'

import { pagesData } from '../../data/pagesData'

export const Page = (props) => {
  const {
    ...otherProps
  } = props

  const { pageSide } = React.useContext(ChangePageContext)

  const currentPage = pagesData.find(({ pageSide: pageSideData }) => pageSide === pageSideData)
  const currentPageData = currentPage.pageData

  return (
    <StyledPage
      {...otherProps}
    >
      <StyledFormContainer
        autoComplete={'off'}
        {...otherProps}
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
