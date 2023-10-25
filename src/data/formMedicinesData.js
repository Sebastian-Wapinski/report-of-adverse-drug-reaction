import { v4 as uuid } from 'uuid'

import {
  INVALID_DATE,
  REGEXP_DATE,
  REQUIRE_AT_LEAST_2_CHARACTERS
} from './consts'

export const formMedicinesData = [
  {
    id: uuid(),
    name: 'medicineName',
    placeholder: 'AMOTAX',
    label: 'MEDICINE NAME:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequired: true,
    pageName: 'medicines'
  },
  {
    id: uuid(),
    name: 'medicineDose',
    placeholder: '2x1',
    label: 'MEDICINE DOSE:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequired: true,
    pageName: 'medicines'
  },
  {
    id: uuid(),
    name: 'medicineAdministration',
    placeholder: 'ORAL',
    label: 'MEDICINE ADMINISTRATION:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequired: true,
    pageName: 'medicines'
  },
  {
    id: uuid(),
    name: 'medicineStartsDate',
    placeholder: '01-01-2023',
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    label: 'MEDICINE STARTS:',
    textErrorMessage: INVALID_DATE,
    regExp: REGEXP_DATE,
    isRequired: true,
    pageName: 'medicines'
  }
]
