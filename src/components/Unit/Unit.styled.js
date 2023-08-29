import styled from 'styled-components'

const DefaultStyledUnit = styled.span`

`

const StyledUnit = styled(DefaultStyledUnit)(
  props => props.style
)

export { StyledUnit }
