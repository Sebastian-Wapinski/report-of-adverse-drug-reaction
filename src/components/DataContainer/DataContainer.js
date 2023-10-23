import React from 'react'
import PropTypes from 'prop-types'

import { StyledDataContainer, CenterContainer } from './DataContainer.styled'

export const DataContainer = (props) => {
  const {
    children
  } = props

  return (
    <StyledDataContainer>
      <CenterContainer>
        {children}
      </CenterContainer>
    </StyledDataContainer>
  )
}

DataContainer.propTypes = {
  children: PropTypes.node
}

export default DataContainer
