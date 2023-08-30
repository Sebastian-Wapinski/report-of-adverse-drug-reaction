import styled from 'styled-components'

const DefaultStyledCheckboxContainer = styled.div`

`

const StyledCheckboxContainer = styled(DefaultStyledCheckboxContainer)(
  props => props.style
)

export { StyledCheckboxContainer }
