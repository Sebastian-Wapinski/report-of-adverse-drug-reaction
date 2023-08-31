import { v4 as uuid } from 'uuid'
import { FormMedicContext } from '../contexts/FormMedicContext'
import { FormPatientContext } from '../contexts/FormPatientContext'

export const allFormsBasicData = [
  {
    id: uuid(),
    pageNumber: 1,
    description: 'MEDIC DATA',
    contextForm: FormMedicContext
  },
  {
    id: uuid(),
    pageNumber: 2,
    description: 'PATIENT DATA',
    contextForm: FormPatientContext
  },
  {
    id: uuid(),
    pageNumber: 3,
    description: 'SIDE EFFECTS',
    contextForm: null
  },
  {
    id: uuid(),
    pageNumber: 4,
    description: 'CLASSIFICATION',
    contextForm: null
  },
  {
    id: uuid(),
    pageNumber: 5,
    description: 'MEDICINES',
    contextForm: null
  }
]

export default allFormsBasicData
