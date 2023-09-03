import styled from 'styled-components'

const DefaultStyledRadioContainer = styled.div`
display: grid;
grid-area: radioContainer;
grid-template-columns: 1rem 1fr;
grid-template-areas: 
'input labelRadio';
padding: 0.5rem 0;
`

const StyledRadioContainer = styled(DefaultStyledRadioContainer)(
  props => props.style
)

export { StyledRadioContainer }
