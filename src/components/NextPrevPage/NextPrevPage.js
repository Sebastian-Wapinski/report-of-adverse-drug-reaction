import React from 'react'

import { StyledNextPrevPage, StyledSendFormInfo, StyledInfoMessage } from './NextPrevPage.styled'

import Button from '../Button'

import { ChangePageContext } from '../../contexts/ChangePageContext'

import allFormsBasicData from '../../data/allFormsBasicData'
// import { nextContextArr, prevContextArr } from '../../data/nextPrevChangeFormContextData'
// import { ChangeFormContext } from '../../contexts/ChangeFormContext'
// import { FormPatientContext } from '../../contexts/FormPatientContext'
// import { FormMedicContext } from '../../contexts/FormMedicContext'
// import { FormSideEffectsContext } from '../../contexts/FormSideEffectsContext'
// import { FormClassificationContext } from '../../contexts/FormClassificationContext'
// import { FormMedicinesContext } from '../../contexts/FormMedicinesContext'
import { ProgressContext } from '../../contexts/ProgressContext'
import { clearContextsValues, createFormToSendOnServer } from '../../helper/helper'
import { FormContext } from '../../contexts/FormContext'

export const NextPrevPage = () => {
  const AMOUNT_OF_ALL_PAGES = allFormsBasicData.length
  const { pageSide, setPageSide } = React.useContext(ChangePageContext)
  // const { setContextForm } = React.useContext(ChangeFormContext)

  const formState = React.useContext(FormContext)

  const [clickedSubmit, setClickedSubmit] = React.useState(false)
  const [clickedWithoutSubmit, setClickedWithoutSubmit] = React.useState(false)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return

    // if (prevContextArr[pageSide - 1]) {
    //   setContextForm(formState[prevContextArr[pageSide - 1].prevContext])
    // }

    setPageSide(pageSide - 1)
  }, [pageSide, setPageSide])

  const setNextSide = React.useCallback(() => {
    if (pageSide === AMOUNT_OF_ALL_PAGES) return

    // if (nextContextArr[pageSide]) {
    //   setContextForm(formState[nextContextArr[pageSide].nextContext])
    // }

    setPageSide(pageSide + 1)
  }, [AMOUNT_OF_ALL_PAGES, pageSide, setPageSide])

  const {
    requiredFields,
    correctlyValidatedFields
  } = React.useContext(ProgressContext)

  // const formMedicContext = React.useContext(FormMedicContext)
  // const formPatientContext = React.useContext(FormPatientContext)
  // const formSideEffectsContext = React.useContext(FormSideEffectsContext)
  // const formClassificationContext = React.useContext(FormClassificationContext)
  // const formMedicinesContext = React.useContext(FormMedicinesContext)

  const clearForms = React.useCallback((...contexts) => {
    clearContextsValues(contexts)
  }, [])

  const handleSubmit = React.useCallback(() => {
    if (requiredFields !== correctlyValidatedFields) {
      setClickedWithoutSubmit(true)
      return
    }
    setClickedSubmit(true)

    const rawForm = {
      ...{ ...formState }
    }

    const formToSendOnServer = createFormToSendOnServer(rawForm)

    console.log(formToSendOnServer)

    clearForms(
      formState
    )
  }, [requiredFields, correctlyValidatedFields, formState, clearForms])

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
