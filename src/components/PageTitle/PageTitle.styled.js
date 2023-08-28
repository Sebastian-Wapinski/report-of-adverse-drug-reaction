import styled from 'styled-components'

const DefaultStyledPageTitle = styled.div`
  display: flex;
  justify-content: center;
`

const StyledPageTitle = styled(DefaultStyledPageTitle)(
  props => props.style
)

export { StyledPageTitle }
