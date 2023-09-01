import styled, { css } from 'styled-components'
import { Input } from '../Input'

const DefaultStyledFieldList = styled.div`

`

const StyledFieldList = styled(DefaultStyledFieldList)(
  props => props.$activeList && css`
    ${ListContainer}{
      display: block
    }
    `
)

const ListContainer = styled.ul`
display: none;
position: absolute;
top: 20px;
left: 0;
border: 1px solid black;
padding: 0;
margin: 0;
`

const ListPosition = styled.li`
border: 1px solid black;
background-color: white;
list-style: none;
`

const StyledInput = styled(Input)`

`

const InputListContainer = styled.span`
position: relative;
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

export { StyledFieldList, ListContainer, ListPosition, StyledInput, InputListContainer, StyleDivToggleFalseList }
