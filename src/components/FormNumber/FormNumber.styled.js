import styled from 'styled-components'

const DefaultStyledFormNumber = styled.p`

`

const StyledFormNumber = styled(DefaultStyledFormNumber)(
  props => props.style
)

export { StyledFormNumber }
