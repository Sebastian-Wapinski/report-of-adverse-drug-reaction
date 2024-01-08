import styled, { css } from 'styled-components'
import { Input } from '../Input'
import { Label } from '../Label'

const DefaultStyledFieldList = styled.div`
padding-bottom: 6rem ;
display: grid;
grid-template-rows: 3rem;
grid-template-areas: 
'label'
'inputListContainer';
box-sizing: border-box;
`

const StyledFieldList = styled(DefaultStyledFieldList)(
  props => props.$activeList && css`
    ${ListContainer}{
      display: block
    }
    `
)

const StyledLabel = styled(Label)`
padding-top: 1rem;
`

const ListContainer = styled.ul`
display: none;
position: absolute;
width: 100%;
top: 2rem;
left: 0;
padding: 0;
margin: 0;
z-index: 2;
`

const ListPosition = styled.li`
border: none;
border-radius: 20px;
background: linear-gradient(to right, ${props => props.theme.thirdBackground} 80%, ${props => props.theme.primaryBackground});
box-shadow:  4px 4px 8px #8cd1b3, -4px -4px 8px #caffff;
padding: 0.3rem 1rem;
margin: 0.7rem 0;
box-sizing: border-box;
width: 100%;
list-style: none;
cursor: pointer;
color: ${props => props.theme.primaryBackground};
`

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
  box-sizing: border-box;
`

const InputListContainer = styled.span`
position: relative;
grid-area: inputListContainer;
`

const StyleDivToggleFalseList = styled.div`
  ${
    props => props.$activeList && css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    `
  }
`

export { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer, StyleDivToggleFalseList, StyledLabel }
