import React from 'react'
import PropTypes from 'prop-types'

import { StyledPageSubtitle } from './PageSubtitle.styled'

export const PageSubtitle = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledPageSubtitle
      {...otherProps}
    >
      {children}
    </StyledPageSubtitle>
  )
}

PageSubtitle.propTypes = {
  children: PropTypes.node
}

export default PageSubtitle
