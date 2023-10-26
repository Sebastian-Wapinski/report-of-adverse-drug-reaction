export const REQUIRE_AT_LEAST_2_CHARACTERS = 'This field require at least 2 characters'
export const REQUIRE_2_CHARACTERS = 'This field require 2 characters'
export const FIRST_CHAR_MUST_BE_NUMBER = 'This field must starts with a number'
export const INVALID_EMAIL = 'Invalid email {aa@cc.bb}'
export const INVALID_PHONE = 'Invalid phone number {123-456-789}'
export const INVALID_ZIP_CODE = 'Invalid zip code number {12-345}'
export const INVALID_DATE = 'Invalid date {dd-mm-yyyy} no further then today'
export const REQUIRE_LIST_ELEMENT = 'Permitted list items only'

export const REGEXP_START_WITH_NUMBER = /^[1-9][0-9]*[a-zA-Z]*$/
export const REGEXP_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export const REGEXP_PHONE = /^\d{3}-\d{3}-\d{3}$/g
export const REGEXP_ZIP_CODE = /^\d{2}-\d{3}$/g
export const REGEXP_DATE = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/g
