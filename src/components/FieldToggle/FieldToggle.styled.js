import styled from 'styled-components'
import { Input } from '../Input'
import { Label } from '../Label'

const DefaultStyledFieldToggle = styled.div`
padding: 0.5rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: 'label input';
`

const StyledFieldToggle = styled(DefaultStyledFieldToggle)(
  props => props.style
)

const StyleInput = styled(Input)`
position: relative;
appearance: none;
width: 2.5rem;
height: 1rem;
display: grid;
justify-content: flex-start;
border-radius: 20px;
background: ${props => props.theme.primaryBackground};
box-shadow:  6px 6px 10px #76b096, -6px -6px 10px #e0ffff;
transition: all 0.3s ease-in-out;
cursor: pointer;

&:checked {
  background-color: ${props => props.theme.thirdBackground};
}

&:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1rem;
  height: 1rem;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  background-color: ${props => props.theme.thirdBackground};
  box-shadow:  6px 6px 10px #76b096, -6px -6px 10px #e0ffff;
}

&:checked:before {
  left: calc(3rem - 1rem - 6px);
  background: ${props => props.theme.primaryBackground};
}
`

const StyledLabel = styled(Label)`

`

export { StyledFieldToggle, StyleInput, StyledLabel }
