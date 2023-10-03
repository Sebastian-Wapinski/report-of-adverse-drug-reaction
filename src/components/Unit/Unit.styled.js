import styled from 'styled-components'

const DefaultStyledUnit = styled.span`
grid-area: unit;
padding-left: 0.3rem;
margin: 1rem 0;
color: ${props => props.theme.primaryTextColor};

@media (max-width: 43.75rem){
    margin: 2rem 0.5rem;
  }
`

const StyledUnit = styled(DefaultStyledUnit)(
  props => props.style
)

export { StyledUnit }
