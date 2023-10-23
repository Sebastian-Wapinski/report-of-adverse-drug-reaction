import styled from 'styled-components'
import { size } from '../styled/breakpoints'

const DefaultStyledCardButtonsContainer = styled.nav`
display: flex;
justify-content: space-between;
width: 60%;

@media (max-width: ${size.medium}) {
  width: 80%;
}

@media (max-width: ${size.small}){
  flex-direction: column;
  align-items: center;
}
`

const StyledCardButtonsContainer = styled(DefaultStyledCardButtonsContainer)(
  props => props.style
)

export { StyledCardButtonsContainer }
