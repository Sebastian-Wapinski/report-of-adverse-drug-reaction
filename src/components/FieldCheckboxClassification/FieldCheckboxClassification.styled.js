import styled from 'styled-components'

const DefaultStyledFieldCheckboxClassification = styled.div`

`

const StyledFieldCheckboxClassification = styled(DefaultStyledFieldCheckboxClassification)(
  props => props.style
)

export { StyledFieldCheckboxClassification }
