import { v4 as uuid } from 'uuid'
import {
  INVALID_DATE,
  REGEXP_DATE,
  REQUIRE_AT_LEAST_2_CHARACTERS
} from './consts'

export const formSideEffectsData = [
  {
    id: uuid(),
    name: 'sideEffectOccurDate',
    placeholder: 'dd-mm-yyyy',
    label: 'SIDE EFFECT DATE:',
    textErrorMessage: INVALID_DATE,
    regExp: REGEXP_DATE,
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    isRequired: true,
    type: 'text',
    pageName: 'sideEffects'
  },
  {
    id: uuid(),
    name: 'sideEffectsDescription',
    placeholder: 'Describe side effects',
    label: 'SIDE EFFECTS:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    rows: 10,
    cols: 40,
    isRequired: true,
    type: 'textarea',
    pageName: 'sideEffects'
  },
  {
    id: uuid(),
    name: 'sideEffectsIsPregnant',
    label: 'IS PATIENT PREGNANT:',
    isRequired: false,
    type: 'toggle',
    pageName: 'sideEffects'
  },
  {
    id: uuid(),
    name: 'sideEffectsSeverity',
    label: 'SERIOUS SIDE EFFECTS:',
    isRequired: false,
    type: 'toggle',
    pageName: 'sideEffects'
  }
]
