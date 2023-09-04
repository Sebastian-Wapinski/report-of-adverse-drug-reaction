import styled from 'styled-components'
import { Label } from '../Label'
import { Input } from '../Input'

const DefaultStyledFieldCheckbox = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 2rem auto;
grid-template-areas: 
'label'
'checkboxesContainer';
`

const StyledFieldCheckbox = styled(DefaultStyledFieldCheckbox)(
  props => props.style
)

const StyledCheckboxesContainer = styled.div`
grid-area: checkboxesContainer;
`

const StyledLabel = styled(Label)`
cursor: default;
`

const StyledCheckboxContainer = styled.div`
padding: 0.3rem 0;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: auto;
grid-template-areas: 
'input checkboxLabel';
`

const StyledInput = styled(Input)`
display: grid;
justify-self: center;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
position: relative;
cursor: pointer;

&:before {
  position: absolute;
  content: '';
  background: ${props => props.theme.primaryBackground};
  box-shadow:  6px 6px 10px #76b096, -6px -6px 10px #e0ffff;
  width: 1.5rem;
  height: 1.5rem;
  transition: 0.2s ease-in-out;
}

&:checked:before {
  position: absolute;
  content: '✓';
  font-size: 1.4rem;
  text-align: center;
  background: ${props => props.theme.thirdBackground};
}

&:disabled:before {
  position: absolute;
  content: '✗';
  font-size: 1.4rem;
  text-align: center;
  cursor: not-allowed;
}
`

const CheckboxLabel = styled(Label)`
grid-area: checkboxLabel;
display: grid;
align-self: center;
`

export { StyledFieldCheckbox, CheckboxLabel, StyledLabel, StyledCheckboxesContainer, StyledInput, StyledCheckboxContainer }
