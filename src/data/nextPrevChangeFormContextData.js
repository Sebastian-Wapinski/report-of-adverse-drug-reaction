// import { FormClassificationContext } from '../contexts/FormClassificationContext'
// import { FormMedicContext } from '../contexts/FormMedicContext'
// import { FormMedicinesContext } from '../contexts/FormMedicinesContext'
// import { FormPatientContext } from '../contexts/FormPatientContext'
// import { FormSideEffectsContext } from '../contexts/FormSideEffectsContext'

export const prevContextArr = [
  {
    pageContextSide: 1,
    prevContext: 'medicData'
  },
  {
    pageContextSide: 2,
    prevContext: 'medicData'
  },
  {
    pageContextSide: 3,
    prevContext: 'patientData'
  },
  {
    pageContextSide: 4,
    prevContext: 'sideEffects'
  },
  {
    pageContextSide: 5,
    prevContext: 'classification'
  }
]

export const nextContextArr = [
  {
    pageContextSide: 1,
    nextContext: 'patientData'
  },
  {
    pageContextSide: 2,
    nextContext: 'patientData'
  },
  {
    pageContextSide: 3,
    nextContext: 'sideEffects'
  },
  {
    pageContextSide: 4,
    nextContext: 'classification'
  },
  {
    pageContextSide: 5,
    nextContext: 'medicines'
  }
]
