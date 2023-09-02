import styled from 'styled-components'

const DefaultStyledFormField = styled.div`
width: 100%;
`

const StyledFormField = styled(DefaultStyledFormField)(
  props => props.style
)

export { StyledFormField }
