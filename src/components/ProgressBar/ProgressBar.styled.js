import styled, { css } from 'styled-components'

const DefaultStyledProgressBar = styled.div`
display: flex;
width: 50%;
height: 2rem;
border: none;
border-radius: 50px;
background: linear-gradient(145deg, #b7ffe9, #9ae6c4);
box-shadow:  12px 12px 24px #79b59b, -12px -12px 24px #ddffff;
color: ${props => props.theme.primaryTextColor};
font-weight: 600;
transition: all 0.3s ease-in-out;
`

const StyledProgressBar = styled(DefaultStyledProgressBar)(
  props => props.style
)

const ProgressPercentageBar = styled.div`
height: 100%;
width: 0;
background-color: green;
${
  props => props.$widthPercentage && css`
  width: ${props.$widthPercentage + '%'};
  `
}
`

const ProgressPercentageNumber = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export { StyledProgressBar, ProgressPercentageBar, ProgressPercentageNumber }
