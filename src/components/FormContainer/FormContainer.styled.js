import styled from 'styled-components'

const DefaultStyledFormContainer = styled.form`
width: 40%;
padding: 2rem 0;
`

const StyledFormContainer = styled(DefaultStyledFormContainer)(
  props => props.style
)

export { StyledFormContainer }
