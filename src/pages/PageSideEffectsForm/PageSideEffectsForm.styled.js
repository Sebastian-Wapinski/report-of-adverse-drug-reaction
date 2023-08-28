import styled from 'styled-components'

const DefaultStyledPageSideEffectsForm = styled.div`

`

const StyledPageSideEffectsForm = styled(DefaultStyledPageSideEffectsForm)(
  props => props.style
)

export { StyledPageSideEffectsForm }
