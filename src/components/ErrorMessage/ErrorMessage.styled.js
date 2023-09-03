import styled from 'styled-components'

const DefaultStyledErrorMessage = styled.div`
color: ${props => props.theme.primaryTextColor};
font-size: 0.8rem;
display: grid;
justify-content: center;
grid-area: error;
padding: 0.8rem;
`

const StyledErrorMessage = styled(DefaultStyledErrorMessage)(
  props => props.style
)

export { StyledErrorMessage }
