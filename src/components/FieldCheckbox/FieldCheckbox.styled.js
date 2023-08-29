import styled from 'styled-components'

const DefaultStyledFieldCheckbox = styled.div`

`

const StyledFieldCheckbox = styled(DefaultStyledFieldCheckbox)(
  props => props.style
)

export { StyledFieldCheckbox }
