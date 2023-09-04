import styled from 'styled-components'

const DefaultStyledPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 55%;
`

const StyledPage = styled(DefaultStyledPage)(
  props => props.style
)

export { StyledPage }
