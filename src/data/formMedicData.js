import { v4 as uuid } from 'uuid'

import {
  REQUIRE_AT_LEAST_2_CHARACTERS,
  FIRST_CHAR_MUST_BE_NUMBER,
  REGEXP_START_WITH_NUMBER,
  REGEXP_EMAIL,
  INVALID_EMAIL,
  REGEXP_PHONE,
  INVALID_PHONE,
  REGEXP_ZIP_CODE,
  INVALID_ZIP_CODE
} from './consts'

export const formMedicData = [
  {
    id: uuid(),
    name: 'doctorFirstName',
    placeholder: 'Jan',
    label: 'FIRST NAME:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'doctorLastName',
    placeholder: 'Kowalski',
    label: 'LAST NAME:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'cityName',
    placeholder: 'Cracow',
    label: 'CITY:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'streetName',
    placeholder: 'Skarbowa',
    label: 'STREET:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'streetNumber',
    placeholder: '4',
    label: 'STREET NUMBER:',
    textErrorMessage: FIRST_CHAR_MUST_BE_NUMBER,
    regExp: REGEXP_START_WITH_NUMBER,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'medicalFacility',
    placeholder: 'Szpital Specjalistyczny im. Józefa Dietla',
    label: 'MEDICAL FACILITY:',
    textErrorMessage: REQUIRE_AT_LEAST_2_CHARACTERS,
    minAmountOfCharacters: 2,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'email',
    placeholder: 'jan@kowalski.com',
    label: 'EMAIL:',
    regExp: REGEXP_EMAIL,
    textErrorMessage: INVALID_EMAIL,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'phone',
    placeholder: '123-456-789',
    label: 'PHONE NUMBER:',
    regExp: REGEXP_PHONE,
    textErrorMessage: INVALID_PHONE,
    isRequire: true
  },
  {
    id: uuid(),
    name: 'zipCode',
    placeholder: '31-121',
    label: 'ZIP CODE:',
    textErrorMessage: INVALID_ZIP_CODE,
    regExp: REGEXP_ZIP_CODE,
    isRequire: true
  }
]
