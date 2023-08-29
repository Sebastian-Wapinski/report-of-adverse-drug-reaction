import styled from 'styled-components'

const DefaultStyledFieldRange = styled.div`

`

const StyledFieldRange = styled(DefaultStyledFieldRange)(
  props => props.style
)

export { StyledFieldRange }
