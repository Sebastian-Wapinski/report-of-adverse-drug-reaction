import React from 'react'
import PropTypes from 'prop-types'

import ProviderChangePageContext from './ChangePageContext'

export const ProvideContexts = (props) => {
  const { children } = props

  return (
    <ProviderChangePageContext>
      {children}
    </ProviderChangePageContext>
  )
}

ProvideContexts.propTypes = {
  children: PropTypes.node
}

export default ProvideContexts
