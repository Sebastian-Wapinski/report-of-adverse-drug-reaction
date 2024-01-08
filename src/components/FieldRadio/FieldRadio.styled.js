import styled from 'styled-components'
import { Input } from '../Input'
import { Label } from '../Label'
import { size } from '../styled/breakpoints'

const DefaultStyledFieldRadio = styled.div`
display: grid;
grid-template-columns: 3fr 5fr;
grid-template-areas: 
'label container';
padding: 0.5rem 0;

@media (max-width: ${size.small}){
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 2rem;
  grid-template-areas: 
  '. label .'
  '. container .';
  }
  margin-bottom: 2rem;
`

const StyledFieldRadio = styled(DefaultStyledFieldRadio)(
  props => props.style
)

const StyledInput = styled(Input)`
grid-area: input;
justify-self: flex-end;
width: 2rem;

appearance: none;
-webkit-appearance: none;
-moz-appearance: none;

&:before {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 3px;
  background: ${props => props.theme.primaryBackground};
  box-shadow:  4px 4px 6px #76b096, -4px -4px 6px #e0ffff;
  cursor: pointer;

  transition: all 0.3s ease;
}

&:checked:before {
  background-color: ${props => props.theme.thirdBackground};
  cursor: not-allowed;
}
`

const StyledLabel = styled(Label)`
cursor: default;
`

const StyledRadioLabel = styled(Label)`
grid-area: labelRadio;
padding-left: 0.3rem;
`

const StyledContainer = styled.div`
grid-area: container;
`

export { StyledFieldRadio, StyledInput, StyledLabel, StyledContainer, StyledRadioLabel }
