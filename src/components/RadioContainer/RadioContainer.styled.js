import styled from 'styled-components'

const DefaultStyledRadioContainer = styled.div`

`

const StyledRadioContainer = styled(DefaultStyledRadioContainer)(
  props => props.style
)

export { StyledRadioContainer }
