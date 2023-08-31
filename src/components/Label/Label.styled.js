import styled, { css } from 'styled-components'

const DefaultStyledLabel = styled.label`
${
  props => props.isRequired === true && css`
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
