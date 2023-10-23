import styled from 'styled-components'
import { size } from '../styled/breakpoints'

const DefaultStyledErrorMessage = styled.div`
color: ${props => props.theme.primaryTextColor};
font-size: 0.8rem;
display: grid;
justify-content: center;
grid-area: error;
padding: 0.8rem;

@media (max-width: ${size.small}){
  text-align: center;
  }
`

const StyledErrorMessage = styled(DefaultStyledErrorMessage)(
  props => props.style
)

export { StyledErrorMessage }
