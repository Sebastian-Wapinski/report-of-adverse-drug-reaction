import React from 'react'
import PropTypes from 'prop-types'

import { StyledNextPrevPage } from './NextPrevPage.styled'

import Button from '../Button'
import { ChangePageContext } from '../../contexts/ChangePageContext'

export const NextPrevPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const AMOUNT_OF_ALL_PAGES = 5
  const { pageSide, setPageSide } = React.useContext(ChangePageContext)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return
    setPageSide(pageSide - 1)
  }, [pageSide, setPageSide])

  const setNextSide = React.useCallback(() => {
    if (pageSide === AMOUNT_OF_ALL_PAGES) return
    setPageSide(pageSide + 1)
  }, [pageSide, setPageSide])

  return (
    <StyledNextPrevPage
      {...otherProps}
    >
      <Button
        onClick={setPreviousSide}
      >
        PREVIOUS FORM
      </Button>
      <Button
        onClick={setNextSide}
      >
        NEXT FORM
      </Button>
    </StyledNextPrevPage>
  )
}

NextPrevPage.propTypes = {
  children: PropTypes.node
}

export default NextPrevPage
