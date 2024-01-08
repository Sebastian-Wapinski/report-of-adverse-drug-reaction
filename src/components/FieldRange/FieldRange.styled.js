import styled from 'styled-components'
import { Input } from '../Input'
import { Label } from '../Label'
import { size } from '../styled/breakpoints'

const DefaultStyledFieldRange = styled.div`
display: grid;
grid-template-columns: 1fr 8fr 1rem;
grid-template-rows: auto;
grid-template-areas: 
'label inputRange .'
'inputNumber inputNumber unit'
'error error error';

@media (max-width: ${size.small}){
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 2rem;
  grid-template-areas: 
  '. label .'
  '. inputRange .'
  '. inputNumber unit'
  '. error error';
  }
`

const StyledFieldRange = styled(DefaultStyledFieldRange)(
  props => props.style
)

const StyledInputRange = styled(Input).attrs(
  props => ({
    style: {
      background: `
      linear-gradient(to right, ${props.theme.secondaryBackground} 0%,${props.theme.primaryBackground} ${(100 / (props.max - props.min)) * (props.value - props.min)}%, ${props.theme.primaryBackground} ${(100 / (props.max - props.min)) * (props.value - props.min)}%, ${props.theme.primaryBackground} 100%)
      `
    }
  })
)`
  grid-area: inputRange;
  align-self: center;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border-radius: 50px;
  height: 1rem;
  box-shadow:  6px 6px 10px #8cd1b3, -6px -6px 10px #caffff;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, ${props => props.theme.secondaryBackground} 40%, ${props => props.theme.primaryBackground} 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, black 40%, red 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }
`

const StyledInputNumber = styled(Input)`
  justify-self: flex-end;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: ${props => props.theme.primaryBackground};
  border: none;
  border-radius: 30px;
  background: #ABFFDA;
  box-shadow:  6px 6px 10px #8cd1b3, -6px -6px 10px #caffff;
  outline: none;
  grid-area: inputNumber;

  @media (max-width: ${size.small}){
    justify-self: center;
    margin: 1.5rem 0;
  }
`

const StaledLabel = styled(Label)`
  cursor: default;

  @media (max-width: ${size.small}){
    text-align: center;
  }
`

export { StyledFieldRange, StyledInputRange, StyledInputNumber, StaledLabel }
