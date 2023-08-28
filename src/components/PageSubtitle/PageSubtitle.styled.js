import styled from 'styled-components'

const DefaultStyledPageSubtitle = styled.div`
  display: flex;
  justify-content: center;
`

const StyledPageSubtitle = styled(DefaultStyledPageSubtitle)(
  props => props.style
)

export { StyledPageSubtitle }
