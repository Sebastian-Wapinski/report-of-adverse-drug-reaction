import styled, { css } from 'styled-components'

const DefaultStyledNextPrevPage = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin-bottom: 2rem;
`

const StyledNextPrevPage = styled(DefaultStyledNextPrevPage)(
  props => props.style
)

const StyledSendFormInfo = styled.div`
position: absolute;
top: -20rem;
left: calc(50% - 12.5rem);
background-color: red;
width: 25rem;
height: 12.5rem;
transition: 0.5s ease-in-out;
border: none;
outline: none;
border-radius: 50px;
background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
box-shadow:  8px 8px 10px #87c9ac, -8px -8px 10px #cfffff;
display: flex;
justify-content: center;
align-items: center;

${
  props => props.$isSubmit && css`
  top: 2rem;
  `
}
`

const StyledInfoMessage = styled.div`
font-size: 1.5rem;
font-weight: 500;
color: ${props => props.theme.primaryTextColor}
`

export { StyledNextPrevPage, StyledSendFormInfo, StyledInfoMessage }
