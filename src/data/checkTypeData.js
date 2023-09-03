import React from 'react'

import { v4 as uuid } from 'uuid'

import { FieldText } from '../components/FieldText'
import { FieldRange } from '../components/FieldRange'
import { FieldRadio } from '../components/FieldRadio'
import { FieldTextarea } from '../components/FieldTextarea'
import { FieldToggle } from '../components/FieldToggle'
import { FieldCheckbox } from '../components/FieldCheckbox'
import { FieldList } from '../components/FieldList'
import { FieldCheckboxClassification } from '../components/FieldCheckboxClassification'

export const checkTypeData = [
  {
    checkType: 'text',
    useField: <FieldText key={uuid()}/>
  },
  {
    checkType: 'range',
    useField: <FieldRange key={uuid()}/>
  },
  {
    checkType: 'radio',
    useField: <FieldRadio key={uuid()}/>
  },
  {
    checkType: 'textarea',
    useField: <FieldTextarea key={uuid()}/>
  },
  {
    checkType: 'toggle',
    useField: <FieldToggle key={uuid()}/>
  },
  {
    checkType: 'checkbox',
    useField: <FieldCheckbox key={uuid()} />
  },
  {
    checkType: 'list',
    useField: <FieldList key={uuid()}/>
  },
  {
    checkType: 'checkboxClassification',
    useField: <FieldCheckboxClassification key={uuid()}/>
  }
]
