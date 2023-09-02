import styled from 'styled-components'
import { Input } from '../Input'

const DefaultStyledFieldText = styled.div`
display: flex;
justify-content: space-between;
margin: 0.6rem 0;
`

const StyledFieldText = styled(DefaultStyledFieldText)(
  props => props.style
)

const StyledInput = styled(Input)`
  width: 60%;
  padding: 0.5rem;
  background-color: ${props => props.theme.primaryBackground};
  border: none;
  border-radius: 30px;
  background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
  box-shadow:  12px 12px 24px #79b59b, -12px -12px 24px #ddffff;
  outline: none;
`

export { StyledFieldText, StyledInput }
