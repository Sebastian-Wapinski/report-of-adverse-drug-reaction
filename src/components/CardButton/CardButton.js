import React from 'react'
import PropTypes from 'prop-types'

import FormNumber from '../FormNumber'
import Text from '../Text'

import { ChangePageContext } from '../../contexts/ChangePageContext'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'

import { StyledCardButton } from './CardButton.styled'

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
    if (pageSide === pageNumber) return
    setPageSide(pageNumber)
    setContextForm(contextForm)
  }, [contextForm, pageNumber, pageSide, setContextForm, setPageSide])

  return (
    <StyledCardButton
      onClick={setCurrentPage}
      {...otherProps}
    >
      <FormNumber
        pageNumber={pageNumber}
      />
      <Text
        text={description}
      />
    </StyledCardButton>
  )
}

CardButton.propTypes = {
  page: PropTypes.object.isRequired
}

export default CardButton
