import React from 'react'
import { ErrorMessage } from '../components/ErrorMessage'

export const createFormToSendOnServer = (rawForm) => {
  return rawForm.map((rawItem) => {
    return Object.keys(rawItem[1])
      .filter(key => !key.includes('IsValid') && !key.includes('dispatch'))
      .reduce((acc, key) => {
        acc[key] = rawItem[1][key]
        return acc
      }, {})
  })
}

export const clearContextsValues = (state, dispatch) => {
  Object.entries(state).forEach(contextFields => {
    if (!contextFields[0].includes('dispatch')) {
      for (const key in contextFields[1]) {
        const type = typeof contextFields[1][key]
        const value =
          type === 'string' ?
            ''
            :
            type === 'number' ?
              0
              :
              false
        dispatch({ pageName: contextFields[0], name: key, value })
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
