import React from 'react'

import { FieldText } from '../components/FieldText'
import { FieldNumber } from '../components/FieldNumber'
import { FieldRange } from '../components/FieldRange'
import { FieldRadio } from '../components/FieldRadio'
import { FieldTextarea } from '../components/FieldTextarea'
import { FieldToggle } from '../components/FieldToggle'
import { FieldCheckbox } from '../components/FieldCheckbox'
import { FieldList } from '../components/FieldList'

export const checkTypeData = [
  {
    checkType: 'text',
    useField: <FieldText />
  },
  {
    checkType: 'number',
    useField: <FieldNumber />
  },
  {
    checkType: 'range',
    useField: <FieldRange />
  },
  {
    checkType: 'radio',
    useField: <FieldRadio />
  },
  {
    checkType: 'textarea',
    useField: <FieldTextarea />
  },
  {
    checkType: 'toggle',
    useField: <FieldToggle />
  },
  {
    checkType: 'checkbox',
    useField: <FieldCheckbox />
  },
  {
    checkType: 'list',
    useField: <FieldList />
  }
]
