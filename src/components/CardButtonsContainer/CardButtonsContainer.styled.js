import styled from 'styled-components'

const DefaultStyledCardButtonsContainer = styled.nav`
display: flex;
justify-content: space-between;
width: 60%;

@media (max-width: 62.5rem) {
  width: 80%;
}

@media (max-width: 43.75rem){
  flex-direction: column;
  align-items: center;
}
`

const StyledCardButtonsContainer = styled(DefaultStyledCardButtonsContainer)(
  props => props.style
)

export { StyledCardButtonsContainer }
