import React from 'react'
import PropTypes from 'prop-types'

import { StyledCardButton, StyledFormNumber, StyledText } from './CardButton.styled'

import { ChangePageContext } from '../../contexts/ChangePageContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

export const CardButton = (props) => {
  const {
    page,
    ...otherProps
  } = props

  const {
    pageNumber,
    description,
    contextForm
  } = page

  const { pageSide, setPageSide } = React.useContext(ChangePageContext)
  const { setContextForm } = React.useContext(ChangeFormContext)

  const setCurrentPage = React.useCallback(() => {
    if (pageSide === pageNumber) {
      return
    }
    setPageSide(pageNumber)
    setContextForm(contextForm)
  }, [pageSide, pageNumber, setPageSide, setContextForm, contextForm])

  let isActive = false
  if (pageSide === pageNumber) {
    isActive = true
  }

  return (
    <StyledCardButton
      onClick={setCurrentPage}
      isActive={isActive}
      {...otherProps}
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
  page: PropTypes.object.isRequired
}

export default CardButton
