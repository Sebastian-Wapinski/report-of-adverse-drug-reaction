import styled from 'styled-components'

const DefaultStyledButton = styled.button`

`

const StyledButton = styled(DefaultStyledButton)(
  props => props.style
)

export { StyledButton }
