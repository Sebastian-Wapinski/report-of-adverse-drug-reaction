import React from 'react'
import PropTypes from 'prop-types'

import { StyledNextPrevPage } from './NextPrevPage.styled'

import Button from '../Button'

import { ChangePageContext } from '../../contexts/ChangePageContext'

import allFormsBasicData from '../../data/allFormsBasicData'
// import { nextContextArr, prevContextArr } from '../../data/nextPrevChangeFormContextData'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { FormPatientContext } from '../../contexts/FormPatientContext'
import { FormMedicContext } from '../../contexts/FormMedicContext'

export const NextPrevPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const AMOUNT_OF_ALL_PAGES = allFormsBasicData.length
  const { pageSide, setPageSide } = React.useContext(ChangePageContext)
  const { setContextForm } = React.useContext(ChangeFormContext)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return

    // prevContextArr.forEach(contextPosition => {
    //   const { pageContextSide, prevContext } = contextPosition
    //   if (pageContextSide === pageSide) {
    //     setContextForm(prevContext)
    //   }
    // })

    if (pageSide === 2) {
      setContextForm(FormMedicContext)
    }

    setPageSide(pageSide - 1)
  }, [pageSide, setContextForm, setPageSide])

  const setNextSide = React.useCallback(() => {
    if (pageSide === AMOUNT_OF_ALL_PAGES) return

    // nextContextArr.forEach(contextPosition => {
    //   const { pageContextSide, nextContext } = contextPosition
    //   if (pageContextSide === pageSide) {
    //     setContextForm(nextContext)
    //   }
    // })

    if (pageSide === 1) {
      setContextForm(FormPatientContext)
    }

    setPageSide(pageSide + 1)
  }, [AMOUNT_OF_ALL_PAGES, pageSide, setContextForm, setPageSide])

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
