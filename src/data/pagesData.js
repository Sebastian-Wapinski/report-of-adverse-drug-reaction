import { formClassificationData } from './formClassificationData'
import { formMedicData } from './formMedicData'
import { formMedicinesData } from './formMedicinesData'
import { formPatientData } from './formPatientData'
import { formSideEffectsData } from './formSideEffectsData'

export const pagesData = [
  {
    pageSide: 1,
    pageData: formMedicData
  },
  {
    pageSide: 2,
    pageData: formPatientData
  },
  {
    pageSide: 3,
    pageData: formSideEffectsData
  },
  {
    pageSide: 4,
    pageData: formClassificationData
  },
  {
    pageSide: 5,
    pageData: formMedicinesData
  }
]
