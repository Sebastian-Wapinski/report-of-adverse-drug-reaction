import styled from 'styled-components'

const DefaultStyledFieldRadio = styled.div`

`

const StyledFieldRadio = styled(DefaultStyledFieldRadio)(
  props => props.style
)

export { StyledFieldRadio }
