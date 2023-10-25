import React from 'react'

import allFormsBasicData from '../../data/allFormsBasicData'
import CardButton from '../CardButton/CardButton'

import { StyledCardButtonsContainer } from './CardButtonsContainer.styled'

export const CardButtonsContainer = () => {
  return (
    <StyledCardButtonsContainer>
      {
      allFormsBasicData.map(page => {
        const { id, pageNumber, description } = page

        return (
          <CardButton
            key={id}
            pageNumber={pageNumber}
            description={description}
          />
        )
      })
      }
    </StyledCardButtonsContainer>
  )
}

export default CardButtonsContainer
