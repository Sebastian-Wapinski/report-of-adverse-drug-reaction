import styled from 'styled-components'

const DefaultStyledPageClassificationForm = styled.div`

`

const StyledPageClassificationForm = styled(DefaultStyledPageClassificationForm)(
  props => props.style
)

export { StyledPageClassificationForm }
