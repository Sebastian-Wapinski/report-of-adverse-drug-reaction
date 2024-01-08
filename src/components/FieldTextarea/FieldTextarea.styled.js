import styled from 'styled-components'
import Label from '../Label'
import { size } from '../styled/breakpoints'

const DefaultStyledFieldTextarea = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 2rem;
grid-template-areas: 
'label'
'textarea'
'error';
`

const StyledFieldTextarea = styled(DefaultStyledFieldTextarea)(
  props => props.style
)

const Textarea = styled.textarea`
  display: grid;
  justify-self: flex-end;
  width: 100%;
  padding: 0.5rem;
  background-color: ${props => props.theme.primaryBackground};
  border: none;
  border-radius: 30px;
  background: #ABFFDA;
  box-shadow:  4px 4px 8px #8cd1b3, -4px -4px 8px #caffff;
  outline: none;
  margin-bottom: 1rem;
  grid-area: textarea;

  @media (max-width: ${size.small}){
    justify-self: center;
  }
`

const StyledLabel = styled(Label)`
@media (max-width: ${size.small}){
  text-align: center;
  }
`

export { StyledFieldTextarea, Textarea, StyledLabel }
