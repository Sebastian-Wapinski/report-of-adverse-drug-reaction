import React from 'react'
import PropTypes from 'prop-types'

const errorProvider = () => {
  console.error('Forgot pass provider')
}

const init = {
  pageSide: 1,
  setPageSide: errorProvider
}

export const ChangePageContext = React.createContext(init)

export const ProviderChangePageContext = (props) => {
  const { children } = props

  const [pageSide, setPageSide] = React.useState(init.pageSide)

  return (
    <ChangePageContext.Provider
      value={{
        pageSide,
        setPageSide
      }}
    >
      {children}
    </ChangePageContext.Provider>
  )
}

ProviderChangePageContext.propTypes = {
  children: PropTypes.node
}

export default ProviderChangePageContext
