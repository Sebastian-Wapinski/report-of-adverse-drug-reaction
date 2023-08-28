import styled from 'styled-components'

const DefaultStyledNextPrevPage = styled.div`

`

const StyledNextPrevPage = styled(DefaultStyledNextPrevPage)(
  props => props.style
)

export { StyledNextPrevPage }
