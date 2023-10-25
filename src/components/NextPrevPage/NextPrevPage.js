import React from 'react'

import { StyledNextPrevPage, StyledSendFormInfo, StyledInfoMessage } from './NextPrevPage.styled'

import Button from '../Button'

import { ChangePageContext } from '../../contexts/ChangePageContext'

import allFormsBasicData from '../../data/allFormsBasicData'

import { ProgressContext } from '../../contexts/ProgressContext'
import { clearContextsValues, createFormToSendOnServer } from '../../helper/helper'
import { FormContext } from '../../contexts/FormContext'

export const NextPrevPage = () => {
  const AMOUNT_OF_ALL_PAGES = allFormsBasicData.length
  const { pageSide, setPageSide } = React.useContext(ChangePageContext)

  const formState = React.useContext(FormContext)
  const { dispatch } = formState

  const [clickedSubmit, setClickedSubmit] = React.useState(false)
  const [clickedWithoutSubmit, setClickedWithoutSubmit] = React.useState(false)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return

    setPageSide(pageSide - 1)
  }, [pageSide, setPageSide])

  const setNextSide = React.useCallback(() => {
    if (pageSide === AMOUNT_OF_ALL_PAGES) return

    setPageSide(pageSide + 1)
  }, [AMOUNT_OF_ALL_PAGES, pageSide, setPageSide])

  const {
    requiredFields,
    correctlyValidatedFields
  } = React.useContext(ProgressContext)

  const handleSubmit = React.useCallback(() => {
    if (requiredFields !== correctlyValidatedFields) {
      setClickedWithoutSubmit(true)
      return
    }
    setClickedSubmit(true)

    const rawForm = [
      Object.entries(formState)
    ]

    const formToSendOnServer = createFormToSendOnServer(rawForm[0])

    console.log(formToSendOnServer, 'formToSendOnServer')

    clearContextsValues(formState, dispatch)
  }, [correctlyValidatedFields, dispatch, formState, requiredFields])

  const handleTimeout = () => {
    setTimeout(() => {
      setClickedSubmit(false)
      setClickedWithoutSubmit(false)
    }, 2000)
  }

  return (
    <StyledNextPrevPage>
      <Button
        onClick={setPreviousSide}
        disabled={pageSide === 1}
      >
        PREVIOUS FORM
      </Button>
      {
        pageSide === AMOUNT_OF_ALL_PAGES ?
          <Button
            type={'submit'}
            onClick={() => {
              handleSubmit()
              handleTimeout()
            }}
          >
            SUBMIT
          </Button>
          :
          null
        }
      <Button
        onClick={setNextSide}
        disabled={pageSide === AMOUNT_OF_ALL_PAGES}
      >
        NEXT FORM
      </Button>
      <StyledSendFormInfo
        $isSubmit={clickedSubmit}
      >
        <StyledInfoMessage>
          FORM SENT PROPERLY
        </StyledInfoMessage>
      </StyledSendFormInfo>
      <StyledSendFormInfo
        $isSubmit={clickedWithoutSubmit}
      >
        <StyledInfoMessage>
          PROGRESS BAR REQUIRE 100%
        </StyledInfoMessage>
      </StyledSendFormInfo>
    </StyledNextPrevPage>
  )
}

export default NextPrevPage
