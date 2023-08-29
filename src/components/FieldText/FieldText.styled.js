import styled from 'styled-components'

const DefaultStyledFieldText = styled.div`

`

const StyledFieldText = styled(DefaultStyledFieldText)(
  props => props.style
)

export { StyledFieldText }
