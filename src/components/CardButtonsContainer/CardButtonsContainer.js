import React from 'react'
import PropTypes from 'prop-types'

import allFormsBasicData from '../../data/allFormsBasicData'
import CardButton from '../CardButton/CardButton'

import { StyledCardButtonsContainer } from './CardButtonsContainer.styled'

export const CardButtonsContainer = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledCardButtonsContainer
      {...otherProps}
    >
      {
      allFormsBasicData.map(page => {
        const { id } = page
        return (
          <CardButton
            key={id}
            page={{ ...page }}
          />
        )
      })
      }
    </StyledCardButtonsContainer>
  )
}

CardButtonsContainer.propTypes = {
  children: PropTypes.node
}

export default CardButtonsContainer
