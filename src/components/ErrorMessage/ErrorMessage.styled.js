import styled from 'styled-components'

const DefaultStyledErrorMessage = styled.div`

`

const StyledErrorMessage = styled(DefaultStyledErrorMessage)(
  props => props.style
)

export { StyledErrorMessage }
