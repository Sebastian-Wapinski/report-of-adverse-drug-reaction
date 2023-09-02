import styled from 'styled-components'
import { Button } from '../Button'

const DefaultStyledCardButton = styled(Button)`

`

const StyledCardButton = styled(DefaultStyledCardButton)(
  props => props.style
)

export { StyledCardButton }
