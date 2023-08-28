import styled from 'styled-components'

const DefaultStyledPageMedicForm = styled.div`

`

const StyledPageMedicForm = styled(DefaultStyledPageMedicForm)(
  props => props.style
)

export { StyledPageMedicForm }
