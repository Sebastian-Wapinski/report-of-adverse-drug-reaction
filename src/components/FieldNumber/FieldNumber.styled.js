import styled from 'styled-components'

const DefaultStyledFieldNumber = styled.div`

`

const StyledFieldNumber = styled(DefaultStyledFieldNumber)(
  props => props.style
)

export { StyledFieldNumber }
