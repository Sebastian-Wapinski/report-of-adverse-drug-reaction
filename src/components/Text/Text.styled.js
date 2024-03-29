import styled, { css } from 'styled-components'

const DefaultStyledText = styled.p`
color: ${props => props.theme.primaryTextColor}
${
  props => props.required === true && css`
  &::before {
    content:'*'
  }
  `
}
`

const StyledText = styled(DefaultStyledText)(
  props => props.style
)

export { StyledText }
