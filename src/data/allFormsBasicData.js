import { v4 as uuid } from 'uuid'
// import { FormMedicContext } from '../contexts/FormMedicContext'
// import { FormPatientContext } from '../contexts/FormPatientContext'
// import { FormSideEffectsContext } from '../contexts/FormSideEffectsContext'
// import { FormClassificationContext } from '../contexts/FormClassificationContext'
// import { FormMedicinesContext } from '../contexts/FormMedicinesContext'
// import { FormContext } from '../contexts/FormContext'

export const allFormsBasicData = [
  {
    id: uuid(),
    pageNumber: 1,
    description: 'MEDIC DATA',
    contextForm: 'medicData'
  },
  {
    id: uuid(),
    pageNumber: 2,
    description: 'PATIENT DATA',
    contextForm: 'patientData'
  },
  {
    id: uuid(),
    pageNumber: 3,
    description: 'SIDE EFFECTS',
    contextForm: 'sideEffects'
  },
  {
    id: uuid(),
    pageNumber: 4,
    description: 'CLASSIFICATION',
    contextForm: 'classification'
  },
  {
    id: uuid(),
    pageNumber: 5,
    description: 'MEDICINES',
    contextForm: 'medicines'
  }
]

export default allFormsBasicData
