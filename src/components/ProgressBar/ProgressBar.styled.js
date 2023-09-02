import styled, { css } from 'styled-components'

const DefaultStyledProgressBar = styled.div`
position: relative;
border: 1px solid black;
width: 50%;
height: 1.3rem;
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
position: absolute;
left: 0;
right: 0;
text-align: center;
`

export { StyledProgressBar, ProgressPercentageBar, ProgressPercentageNumber }
