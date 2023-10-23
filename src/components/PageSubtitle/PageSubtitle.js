import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageSubtitle } from './PageSubtitle.styled'

export const PageSubtitle = (props) => {
  const {
    children
  } = props

  return (
    <StyledPageSubtitle>
      {children}
    </StyledPageSubtitle>
  )
}

PageSubtitle.propTypes = {
  children: PropTypes.node
}

export default PageSubtitle
