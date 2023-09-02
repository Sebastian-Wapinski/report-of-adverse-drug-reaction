import styled from 'styled-components'

const DefaultStyledPageTitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${props => props.theme.primaryTextColor};
`

const StyledPageTitle = styled(DefaultStyledPageTitle)(
  props => props.style
)

export { StyledPageTitle }
