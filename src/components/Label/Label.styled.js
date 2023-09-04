import styled, { css } from 'styled-components'

const DefaultStyledLabel = styled.label`
color: ${
  props => props.theme.primaryTextColor
};
grid-area: label;
font-weight: 500;
cursor: pointer;
${
  props => props.required === true && css`
  &::before {
    content:'*'
  }
  `
}
`

const StyledLabel = styled(DefaultStyledLabel)(
  props => props.style
)

export { StyledLabel }
