import styled from 'styled-components'

const DefaultStyledFieldToggle = styled.div`

`

const StyledFieldToggle = styled(DefaultStyledFieldToggle)(
  props => props.style
)

export { StyledFieldToggle }
