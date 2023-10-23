import styled from 'styled-components'
import { size } from '../styled/breakpoints'

const DefaultStyledUnit = styled.span`
grid-area: unit;
padding-left: 0.3rem;
margin: 1rem 0;
color: ${props => props.theme.primaryTextColor};

@media (max-width: ${size.small}){
    margin: 2rem 0.5rem;
  }
`

const StyledUnit = styled(DefaultStyledUnit)(
  props => props.style
)

export { StyledUnit }
