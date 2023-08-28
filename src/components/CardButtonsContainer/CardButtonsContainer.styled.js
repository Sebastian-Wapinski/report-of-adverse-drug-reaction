import styled from 'styled-components'

const DefaultStyledCardButtonsContainer = styled.div`

`

const StyledCardButtonsContainer = styled(DefaultStyledCardButtonsContainer)(
  props => props.style
)

export { StyledCardButtonsContainer }
