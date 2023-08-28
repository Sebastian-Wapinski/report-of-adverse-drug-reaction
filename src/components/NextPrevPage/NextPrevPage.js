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

  const { pageSide, setPageSide } = React.useContext(ChangePageContext)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return
    setPageSide(pageSide - 1)
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
      <Button>
        NEXT FORM
      </Button>
    </StyledNextPrevPage>
  )
}

NextPrevPage.propTypes = {
  children: PropTypes.node
}

export default NextPrevPage
