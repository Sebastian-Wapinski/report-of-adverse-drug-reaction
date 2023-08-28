import styled from 'styled-components'

const DefaultStyledPageMedicinesForm = styled.div`

`

const StyledPageMedicinesForm = styled(DefaultStyledPageMedicinesForm)(
  props => props.style
)

export { StyledPageMedicinesForm }
