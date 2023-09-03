import styled from 'styled-components'
import { Input } from '../Input'
import { Label } from '../Label'

const DefaultStyledFieldText = styled.div`
display: grid;
grid-template-columns: 3fr 5fr;
grid-template-rows: auto auto;
grid-template-areas: 
"label input"
"error error";
margin: 0.6rem 0;
`

const StyledFieldText = styled(DefaultStyledFieldText)(
  props => props.style
)

const StyledInput = styled(Input)`
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
  grid-area: input;
`

const StyledLabel = styled(Label)`
`

export { StyledFieldText, StyledInput, StyledLabel }
