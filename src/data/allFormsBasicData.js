import { v4 as uuid } from 'uuid'
import { formMedicData } from './formMedicData'
import { formPatientData } from './formPatientData'
import { formSideEffectsData } from './formSideEffectsData'
import { formClassificationData } from './formClassificationData'
import { formMedicinesData } from './formMedicinesData'

export const allFormsBasicData = [
  {
    id: uuid(),
    pageNumber: 1,
    description: 'MEDIC DATA',
    pageData: formMedicData
  },
  {
    id: uuid(),
    pageNumber: 2,
    description: 'PATIENT DATA',
    pageData: formPatientData
  },
  {
    id: uuid(),
    pageNumber: 3,
    description: 'SIDE EFFECTS',
    pageData: formSideEffectsData
  },
  {
    id: uuid(),
    pageNumber: 4,
    description: 'CLASSIFICATION',
    pageData: formClassificationData
  },
  {
    id: uuid(),
    pageNumber: 5,
    description: 'MEDICINES',
    pageData: formMedicinesData
  }
]

export default allFormsBasicData
