import styled, { css } from 'styled-components'

const DefaultStyledButton = styled.button`
margin-top: 3rem;
border: none;
width: 9rem;
min-height: 3rem;
border-radius: 50px;
background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
box-shadow:  6px 6px 10px #79b59b, -6px -6px 10px #ddffff;
color: ${props => props.theme.primaryTextColor};
font-weight: 600;
transition: all 0.3s ease-in-out;

&:hover {
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
  box-shadow:  8px 8px 10px #87c9ac, -8px -8px 10px #cfffff;
}

&:active {
  cursor: pointer;
  border-radius: 50px;
  background: #ABFFDA;
  box-shadow: inset 20px 20px 36px #89ccae, inset -20px -20px 36px #cdffff;
}

${
  props => props.$isActive && css`
  border-radius: 50px;
  background: #ABFFDA;
  box-shadow: inset 20px 20px 36px #89ccae, inset -20px -20px 36px #cdffff;
  
  &:hover {
  cursor: not-allowed;
  border-radius: 50px;
  background: #ABFFDA;
  box-shadow: inset 20px 20px 36px #89ccae, inset -20px -20px 36px #cdffff;
  }
  `
}

&:disabled {
box-shadow: none;

  &:hover {
  cursor: not-allowed;
  box-shadow: none;
  }

  &:active {
  cursor: not-allowed;
  background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
  box-shadow: none;
  }
}
`

const StyledButton = styled(DefaultStyledButton)(
  props => props.style
)

export { StyledButton }
