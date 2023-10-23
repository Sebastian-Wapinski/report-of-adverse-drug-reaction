import styled from 'styled-components'
import { size } from '../styled/breakpoints'

const DefaultStyledPageTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${size.small}){
    font-size: 1.5rem;
    width: 100%;
    max-width: 20rem;
    margin: 1rem 1rem;
    text-align: center;
  }
`

const StyledPageTitle = styled(DefaultStyledPageTitle)(
  props => props.style
)

export { StyledPageTitle }
