import styled from 'styled-components'

const DefaultStyledPagePatientForm = styled.div`

`

const StyledPagePatientForm = styled(DefaultStyledPagePatientForm)(
  props => props.style
)

export { StyledPagePatientForm }
