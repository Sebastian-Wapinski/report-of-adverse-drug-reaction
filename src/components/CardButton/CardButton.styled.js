import styled from 'styled-components'
import { Button } from '../Button'
import Text from '../Text'

const DefaultStyledCardButton = styled(Button)`
 @media (max-width: 43.75rem){
    width: 100%;
    max-width: 20rem;
    margin: 1rem 1rem;
    text-align: center;
    padding: 0;
  }
`

const StyledCardButton = styled(DefaultStyledCardButton)(
  props => props.style
)

const StyledFormNumber = styled.p`
 @media (max-width: 43.75rem){
  padding: 0;
  margin: 0;
  }
`

const StyledText = styled(Text)`
 @media (max-width: 43.75rem){
  padding: 0;
  margin: 0;
  }
`

export { StyledCardButton, StyledFormNumber, StyledText }
