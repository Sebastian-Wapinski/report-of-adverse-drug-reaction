import styled from 'styled-components'

const DefaultStyledPageSubtitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1rem 0;
  color: ${props => props.theme.primaryTextColor};
`

const StyledPageSubtitle = styled(DefaultStyledPageSubtitle)(
  props => props.style
)

export { StyledPageSubtitle }
