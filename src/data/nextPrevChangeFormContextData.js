import { FormClassificationContext } from '../contexts/FormClassificationContext'
import { FormMedicContext } from '../contexts/FormMedicContext'
import { FormMedicinesContext } from '../contexts/FormMedicinesContext'
import { FormPatientContext } from '../contexts/FormPatientContext'
import { FormSideEffectsContext } from '../contexts/FormSideEffectsContext'

export const prevContextArr = [
  {
    pageContextSide: 1,
    prevContext: FormMedicContext
  },
  {
    pageContextSide: 2,
    prevContext: FormMedicContext
  },
  {
    pageContextSide: 3,
    prevContext: FormPatientContext
  },
  {
    pageContextSide: 4,
    prevContext: FormSideEffectsContext
  },
  {
    pageContextSide: 5,
    prevContext: FormClassificationContext
  }
]

export const nextContextArr = [
  {
    pageContextSide: 1,
    nextContext: FormPatientContext
  },
  {
    pageContextSide: 2,
    nextContext: FormPatientContext
  },
  {
    pageContextSide: 3,
    nextContext: FormSideEffectsContext
  },
  {
    pageContextSide: 4,
    nextContext: FormClassificationContext
  },
  {
    pageContextSide: 5,
    nextContext: FormMedicinesContext
  }
]
