import React from 'react'
import PropTypes from 'prop-types'

import { StyledCardButton, StyledFormNumber, StyledText } from './CardButton.styled'

import { ChangePageContext } from '../../contexts/ChangePageContext'

export const CardButton = (props) => {
  const {
    pageNumber,
    description
  } = props

  const { pageSide, setPageSide } = React.useContext(ChangePageContext)

  const setCurrentPage = React.useCallback(() => {
    if (pageSide === pageNumber) {
      return
    }

    setPageSide(pageNumber)
  }, [pageSide, pageNumber, setPageSide])

  let isActive = false
  if (pageSide === pageNumber) {
    isActive = true
  }

  return (
    <StyledCardButton
      onClick={setCurrentPage}
      isActive={isActive}
    >
      <StyledFormNumber>
        {pageNumber}
      </StyledFormNumber>
      <StyledText
        text={description}
      />
    </StyledCardButton>
  )
}

CardButton.propTypes = {
  pageNumber: PropTypes.number,
  description: PropTypes.string,
  contextForm: PropTypes.object
}

export default CardButton
