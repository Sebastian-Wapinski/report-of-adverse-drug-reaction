import styled from 'styled-components'

const DefaultStyledFormContainer = styled.div`

`

const StyledFormContainer = styled(DefaultStyledFormContainer)(
  props => props.style
)

export { StyledFormContainer }
