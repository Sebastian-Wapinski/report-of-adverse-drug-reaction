import styled from 'styled-components'

const DefaultStyledInputText = styled.input`

`

const StyledInputText = styled(DefaultStyledInputText)(
  props => props.style
)

export { StyledInputText }
