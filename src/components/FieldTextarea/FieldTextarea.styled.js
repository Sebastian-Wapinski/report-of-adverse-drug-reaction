import styled from 'styled-components'

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
  box-shadow:  7px 7px 14px #8cd1b3, -7px -7px 14px #caffff;
  outline: none;
  margin-bottom: 1rem;
  grid-area: textarea;
`

export { StyledFieldTextarea, Textarea }
