import React from 'react'
import { ErrorMessage } from '../components/ErrorMessage'

export const createFormToSendOnServer = (rawForm) => {
  return Object.keys(rawForm)
    .filter(key => !key.includes('IsValid') && !key.includes('dispatch'))
    .reduce((acc, key) => {
      acc[key] = rawForm[key]
      return acc
    }, {})
}

export const clearContextsValues = (contexts) => {
  contexts.forEach(context => {
    for (const key in context) {
      if (!key.includes('dispatch')) {
        const type = typeof context[key]
        const value =
          type === 'string' ?
            ''
            :
            type === 'number' ?
              0
              :
              false
        context.dispatch({ name: key, value })
      }
    }
  })
}

export const setErrorMessageConditionalExpression = (formContextNameIsValid, formContextName, errorMessage, type) => {
  return (
    (formContextNameIsValid === false) && (formContextName !== '') && type === 'string' ?
      <ErrorMessage>{ errorMessage }</ErrorMessage>
      :
        (formContextNameIsValid === false) && (formContextName !== 0) && type === 'number' ?
          <ErrorMessage>{ errorMessage }</ErrorMessage>
          :
          null
  )
}
