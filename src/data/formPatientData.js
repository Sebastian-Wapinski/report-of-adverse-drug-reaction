import { v5 as uuid } from 'uuid'

import {
  REQUIRE_AT_LEAST_2_CHARACTERS,
  INVALID_DATE
} from './consts'

export const formPatientData = [
  {
    id: uuid(),
    name: 'initials',
    placeholder: 'NN',
    label: 'INITIALS:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'birthDate',
    placeholder: '',
    label: 'DATE OF BIRTH:',
    textErrorMessage: INVALID_DATE,
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    isRequire: false
  },
  {
    id: uuid(),
    name: 'sex',
    label: 'SEX:',
    radioBtn: [
      'Male', 'Female'
    ],
    isRequire: true
  },
  {
    id: uuid(),
    name: 'age',
    label: 'AGE:',
    isRequire: true
  },
  {
    id: uuid(),
    name: 'height',
    label: 'HEIGHT:',
    isRequire: true
  },
  {
    id: uuid(),
    name: 'weight',
    label: 'WEIGHT:',
    isRequire: true
  }
]
