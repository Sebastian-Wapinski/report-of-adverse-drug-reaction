import styled from 'styled-components'

const DefaultStyledDataContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${
    props => props.theme.primaryBackground
  };
`

const StyledDataContainer = styled(DefaultStyledDataContainer)(
  props => props.style
)

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1440px;
`

export { StyledDataContainer, CenterContainer }
