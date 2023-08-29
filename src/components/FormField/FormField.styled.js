import styled from 'styled-components'

const DefaultStyledFormField = styled.div`

`

const StyledFormField = styled(DefaultStyledFormField)(
  props => props.style
)

export { StyledFormField }
