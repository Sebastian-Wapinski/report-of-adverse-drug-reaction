import styled from 'styled-components'

const DefaultStyledInput = styled.input`

`

const StyledInput = styled(DefaultStyledInput)(
  props => props.style
)

export { StyledInput }
