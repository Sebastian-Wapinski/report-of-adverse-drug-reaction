import styled from 'styled-components'
import { Label } from '../Label'
import { Input } from '../Input'
import { size } from '../styled/breakpoints'

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

@media (max-width: ${size.small}){
  margin: 1rem 0;
  }
`

const StyledLabel = styled(Label)`
cursor: default;
@media (max-width: ${size.small}){
  text-align: center;
  }
`

const StyledCheckboxContainer = styled.div`
padding: 0.3rem 0;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: auto;
grid-template-areas: 
'input checkboxLabel';

@media (max-width: ${size.small}){
  margin: 0.6rem;
  }
`

const StyledInput = styled(Input)`
display: grid;
justify-self: center;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
position: relative;
cursor: pointer;
align-items: center;

&:before {
  position: absolute;
  content: '';
  background: ${props => props.theme.primaryBackground};
  box-shadow:  4px 4px 6px #76b096, -4px -4px 6px #e0ffff;
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
  background: ${props => props.theme.primaryBackground};
}
`

const StyledCheckboxLabel = styled(Label)`
grid-area: checkboxLabel;
display: grid;
align-items: center;

@media (max-width: ${size.small}){
  margin-left: 2rem;
  }
`

export { StyledFieldCheckbox, StyledCheckboxLabel, StyledLabel, StyledCheckboxesContainer, StyledInput, StyledCheckboxContainer }
