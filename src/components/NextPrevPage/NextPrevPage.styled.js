import styled from 'styled-components'

const DefaultStyledNextPrevPage = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
`

const StyledNextPrevPage = styled(DefaultStyledNextPrevPage)(
  props => props.style
)

export { StyledNextPrevPage }
