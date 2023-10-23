import styled from 'styled-components'
import { Button } from '../Button'
import Text from '../Text'
import { size } from '../styled/breakpoints'

const DefaultStyledCardButton = styled(Button)`
 @media (max-width: ${size.small}){
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
 @media (max-width: ${size.small}){
  padding: 0;
  margin: 0;
  }
`

const StyledText = styled(Text)`
 @media (max-width: ${size.small}){
  padding: 0;
  margin: 0;
  }
`

export { StyledCardButton, StyledFormNumber, StyledText }
