import styled from 'styled-components'

const DefaultStyledNextPrevPage = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin-bottom: 2rem;
`

const StyledNextPrevPage = styled(DefaultStyledNextPrevPage)(
  props => props.style
)

export { StyledNextPrevPage }
