import styled from 'styled-components'

const DefaultStyledText = styled.p`

`

const StyledText = styled(DefaultStyledText)(
  props => props.style
)

export { StyledText }
