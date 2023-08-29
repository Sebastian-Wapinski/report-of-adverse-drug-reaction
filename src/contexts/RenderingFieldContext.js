import React from 'react'
import PropTypes from 'prop-types'

const errorProvider = () => {
  console.error('Forgot pass provider')
}

const init = {
  fieldData: {},
  setFieldData: errorProvider
}

export const RenderingFieldContext = React.createContext(init)

export const ProviderRenderingFieldContext = (props) => {
  const { children } = props

  const [fieldData, setFieldData] = React.useState(init.fieldData)

  return (
    <RenderingFieldContext.Provider
      value={{
        fieldData,
        setFieldData
      }}
    >
      {children}
    </RenderingFieldContext.Provider>
  )
}

ProviderRenderingFieldContext.propTypes = {
  children: PropTypes.node
}

export default ProviderRenderingFieldContext
