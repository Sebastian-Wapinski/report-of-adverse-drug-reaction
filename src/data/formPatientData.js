import { v4 as uuid } from 'uuid'

import {
  REQUIRE_2_CHARACTERS,
  INVALID_DATE,
  REGEXP_DATE
} from './consts'

export const formPatientData = [
  {
    id: uuid(),
    name: 'initials',
    placeholder: 'NN',
    label: 'INITIALS:',
    textErrorMessage: REQUIRE_2_CHARACTERS,
    amountOfCharacters: 2,
    isRequired: true,
    pageName: 'patientData'
  },
  {
    id: uuid(),
    name: 'birthDate',
    placeholder: 'dd-mm-yyyy',
    label: 'DATE OF BIRTH:',
    textErrorMessage: INVALID_DATE,
    regExp: REGEXP_DATE,
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    isRequired: true,
    type: 'text',
    pageName: 'patientData'
  },
  {
    id: uuid(),
    name: 'sex',
    label: 'SEX:',
    radioBtn: [
      {
        value: 'male',
        radioId: 'male',
        radioLabel: 'Male'
      },
      {
        value: 'female',
        radioId: 'female',
        radioLabel: 'Female'
      }
    ],
    isRequired: true,
    type: 'radio',
    pageName: 'patientData'
  },
  {
    id: uuid(),
    name: 'age',
    label: 'AGE:',
    isRequired: true,
    textErrorMessage: 'Range is 0 - 120',
    min: 0,
    max: 90,
    minToValidate: 0,
    maxToValidate: 120,
    type: 'range',
    step: 1,
    pageName: 'patientData'
  },
  {
    id: uuid(),
    name: 'height',
    label: 'HEIGHT:',
    textErrorMessage: 'Range is 0 - 251cm',
    isRequired: true,
    min: 130,
    max: 200,
    minToValidate: 0,
    maxToValidate: 251,
    type: 'range',
    unit: 'cm',
    step: 1,
    pageName: 'patientData'
  },
  {
    id: uuid(),
    name: 'weight',
    label: 'WEIGHT:',
    textErrorMessage: 'Range is 0 - 610kg',
    isRequired: true,
    type: 'range',
    min: 40,
    max: 120,
    minToValidate: 0,
    maxToValidate: 610,
    step: 1,
    unit: 'kg',
    pageName: 'patientData'
  }
]
