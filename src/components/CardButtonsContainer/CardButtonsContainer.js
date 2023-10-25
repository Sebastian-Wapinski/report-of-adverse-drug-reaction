import React from 'react'

import allFormsBasicData from '../../data/allFormsBasicData'
import CardButton from '../CardButton/CardButton'

import { StyledCardButtonsContainer } from './CardButtonsContainer.styled'
import { FormContext } from '../../contexts/FormContext'

export const CardButtonsContainer = () => {
  const formState = React.useContext(FormContext)

  return (
    <StyledCardButtonsContainer>
      {
      allFormsBasicData.map(page => {
        const { id, pageNumber, description, contextForm } = page
        const newContext = formState[contextForm]

        return (
          <CardButton
            key={id}
            pageNumber={pageNumber}
            description={description}
            contextForm={newContext}
          />
        )
      })
      }
    </StyledCardButtonsContainer>
  )
}

export default CardButtonsContainer
