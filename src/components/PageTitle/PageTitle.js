import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageTitle } from './PageTitle.styled'

export const PageTitle = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageTitle
      {...otherProps}
    >
      {children}
    </StyledPageTitle>
  )
}

PageTitle.propTypes = {
  children: PropTypes.node
}

export default PageTitle
