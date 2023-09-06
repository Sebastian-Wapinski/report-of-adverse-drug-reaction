import styled from 'styled-components'

const DefaultStyledCardButtonsContainer = styled.nav`
display: flex;
justify-content: space-between;
width: 60%;
`

const StyledCardButtonsContainer = styled(DefaultStyledCardButtonsContainer)(
  props => props.style
)

export { StyledCardButtonsContainer }
