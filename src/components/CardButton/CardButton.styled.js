import styled from 'styled-components'

const DefaultStyledCardButton = styled.button`

`

const StyledCardButton = styled(DefaultStyledCardButton)(
  props => props.style
)

export { StyledCardButton }
