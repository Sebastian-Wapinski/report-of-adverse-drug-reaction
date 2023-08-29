import styled from 'styled-components'

const DefaultStyledLabel = styled.label`

`

const StyledLabel = styled(DefaultStyledLabel)(
  props => props.style
)

export { StyledLabel }
