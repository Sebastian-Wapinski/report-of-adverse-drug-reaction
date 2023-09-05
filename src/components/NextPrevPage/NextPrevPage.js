import React from 'react'
import PropTypes from 'prop-types'

import { StyledNextPrevPage, StyledSendFormInfo, StyledInfoMessage } from './NextPrevPage.styled'

import Button from '../Button'

import { ChangePageContext } from '../../contexts/ChangePageContext'

import allFormsBasicData from '../../data/allFormsBasicData'
import { nextContextArr, prevContextArr } from '../../data/nextPrevChangeFormContextData'
import { ChangeFormContext } from '../../contexts/ChangeFormContext'
import { FormPatientContext } from '../../contexts/FormPatientContext'
import { FormMedicContext } from '../../contexts/FormMedicContext'
import { FormSideEffectsContext } from '../../contexts/FormSideEffectsContext'
import { FormClassificationContext } from '../../contexts/FormClassificationContext'
import { FormMedicinesContext } from '../../contexts/FormMedicinesContext'
import { ProgressContext } from '../../contexts/ProgressContext'

export const NextPrevPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const AMOUNT_OF_ALL_PAGES = allFormsBasicData.length
  const { pageSide, setPageSide } = React.useContext(ChangePageContext)
  const { setContextForm } = React.useContext(ChangeFormContext)

  const [clickedSubmit, setClickedSubmit] = React.useState(false)
  const [clickedWithoutSubmit, setClickedWithoutSubmit] = React.useState(false)

  const setPreviousSide = React.useCallback(() => {
    if (pageSide === 1) return

    if (prevContextArr[pageSide - 1]) {
      setContextForm(prevContextArr[pageSide - 1].prevContext)
    }

    setPageSide(pageSide - 1)
  }, [pageSide, setContextForm, setPageSide])

  const setNextSide = React.useCallback(() => {
    if (pageSide === AMOUNT_OF_ALL_PAGES) return

    if (nextContextArr[pageSide]) {
      setContextForm(nextContextArr[pageSide].nextContext)
    }

    setPageSide(pageSide + 1)
  }, [AMOUNT_OF_ALL_PAGES, pageSide, setContextForm, setPageSide])

  const {
    requiredFields,
    correctlyValidatedFields
  } = React.useContext(ProgressContext)

  const formMedicContext = React.useContext(FormMedicContext)
  const formPatientContext = React.useContext(FormPatientContext)
  const formSideEffectsContext = React.useContext(FormSideEffectsContext)
  const formClassificationContext = React.useContext(FormClassificationContext)
  const formMedicinesContext = React.useContext(FormMedicinesContext)

  const clearForms = (...context) => {
    context.forEach(elem => {
      for (const key in elem) {
        const { dispatch } = elem
        if (typeof elem[key] === 'string' && !key.includes('dispatch')) {
          dispatch({ name: key, value: '' })
        }
        if (typeof elem[key] === 'number' && !key.includes('dispatch')) {
          dispatch({ name: key, value: 0 })
        }
        if (typeof elem[key] === 'boolean' && !key.includes('dispatch')) {
          dispatch({ name: key, value: false })
        }
      }
    })
  }

  const handleSubmit = React.useCallback(() => {
    if (requiredFields !== correctlyValidatedFields) {
      setClickedWithoutSubmit(true)
      return
    }
    setClickedSubmit(true)

    const rawForm = {
      ...formMedicContext,
      ...formPatientContext,
      ...formSideEffectsContext,
      ...formClassificationContext,
      ...formMedicinesContext
    }

    const formToSendOnServer = {}

    for (const key in rawForm) {
      if (!key.includes('IsValid') && !key.includes('dispatch')) {
        formToSendOnServer[key] = rawForm[key]
      }
    }

    console.log(formToSendOnServer)

    clearForms(
      formMedicContext,
      formPatientContext,
      formSideEffectsContext,
      formClassificationContext,
      formMedicinesContext
    )
  }, [correctlyValidatedFields, formClassificationContext, formMedicContext, formMedicinesContext, formPatientContext, formSideEffectsContext, requiredFields])

  const handleTimeout = () => {
    setTimeout(() => {
      setClickedSubmit(false)
      setClickedWithoutSubmit(false)
    }, 2000)
  }

  return (
    <StyledNextPrevPage
      {...otherProps}
    >
      <Button
        onClick={setPreviousSide}
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

NextPrevPage.propTypes = {
  children: PropTypes.node
}

export default NextPrevPage
