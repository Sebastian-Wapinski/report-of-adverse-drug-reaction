import styled from 'styled-components'

const DefaultStyledPage = styled.article`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 55vh;

@media (max-width: 43.75rem){
  padding: 0;
  }
`

const StyledPage = styled(DefaultStyledPage)(
  props => props.style
)

const StyledFormContainer = styled.form`
width: 50%;
padding: 2rem 0;
@media (max-width: 62.5rem){
  padding: 0;
  width: 65%;
  }

@media (max-width: 43.75rem){
  padding: 0;
  width: 80%;
  }
`

export { StyledPage, StyledFormContainer }
