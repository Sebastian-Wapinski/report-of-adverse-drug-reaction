import styled from 'styled-components'

const DefaultStyledPageSubtitle = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1rem 0;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: 43.75rem){
    font-size: 1rem;
    width: 100%;
    max-width: 20rem;
    margin: 1rem 1rem;
    text-align: center;
  }
`

const StyledPageSubtitle = styled(DefaultStyledPageSubtitle)(
  props => props.style
)

export { StyledPageSubtitle }
