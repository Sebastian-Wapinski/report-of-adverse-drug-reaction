import styled from 'styled-components'
import { Input } from '../Input'

const DefaultStyledFieldList = styled.div`

`

const StyledFieldList = styled(DefaultStyledFieldList)(
  props => props.style
)

const ListContainer = styled.div`
display: none;
position: absolute;
top: 20px;
left: 0;
border: 1px solid black;

`

const ListPosition = styled.div`
border: 1px solid black;
background-color: white;
`

const StyledInput = styled(Input)`
&:focus + ${ListContainer} {
display: block;
}
`

const InputListContainer = styled.span`
position: relative;
`

export { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer }
