import { v4 as uuid } from 'uuid'

import {
  REQUIRE_AT_LEAST_2_CHARACTERS,
  INVALID_DATE,
  REGEXP_DATE
} from './consts'

export const formPatientData = [
  {
    id: uuid(),
    name: 'initials',
    placeholder: 'NN',
    label: 'INITIALS:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequired: true
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
    type: 'text'
  },
  {
    id: uuid(),
    name: 'sex',
    label: 'SEX:',
    radioBtn: [
      {
        value: 'male',
        radioId: 'male',
        radioLabel: 'Male',
        checked: false
      },
      {
        value: 'female',
        radioId: 'female',
        radioLabel: 'Female',
        checked: false
      }
    ],
    isRequired: true,
    type: 'radio'
  },
  {
    id: uuid(),
    name: 'age',
    label: 'AGE:',
    isRequired: true,
    min: 0,
    max: 120,
    type: 'range',
    step: 1
  },
  {
    id: uuid(),
    name: 'height',
    label: 'HEIGHT:',
    isRequired: true,
    min: 0,
    max: 251,
    type: 'range',
    unit: 'cm',
    step: 1
  },
  {
    id: uuid(),
    name: 'weight',
    label: 'WEIGHT:',
    textErrorMessage: 'Range is 0 - 610kg',
    isRequired: true,
    type: 'number',
    min: 0,
    max: 610,
    unit: 'kg'
  }
]
