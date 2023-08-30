import styled from 'styled-components'

const DefaultStyledFieldTextarea = styled.div`

`

const StyledFieldTextarea = styled(DefaultStyledFieldTextarea)(
  props => props.style
)

const Textarea = styled.textarea`

`

export { StyledFieldTextarea, Textarea }
