import styled, { css } from 'styled-components'
import { size } from '../styled/breakpoints'

const DefaultStyledProgressBar = styled.div`
position: relative;
width: 50%;
height: 2rem;
border: none;
border-radius: 50px;
background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
box-shadow:  6px 6px 10px #79b59b, -6px -6px 10px #ddffff;
color: ${props => props.theme.primaryTextColor};
font-weight: 600;
transition: all 0.3s ease-in-out;

@media (max-width: ${size.small}){
  width: 90%;
  }
`

const StyledProgressBar = styled(DefaultStyledProgressBar)(
  props => props.style
)

const ProgressPercentageBar = styled.div`
height: 100%;
width: 0;
border: none;
border-radius: 50px;
background: ${props => props.theme.secondaryBackground};
box-shadow: inset 17px 17px 34px #8bb5a3, inset -17px -17px 34px #fdffff;
transition: 0.4s ease-in-out;
${
  props => props.$widthPercentage && css`
  width: ${props.$widthPercentage + '%'};
  `
}
`

const ProgressPercentageNumber = styled.div`
position: absolute;
z-index: 1;
top: 20%;
left: 45%;
`

export { StyledProgressBar, ProgressPercentageBar, ProgressPercentageNumber }
