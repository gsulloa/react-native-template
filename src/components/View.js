import styled from "styled-components/native"

export const Screen = styled.View`
  flex: 1;
  background-color: ${props => (props.background ? props.background : "#fff")};
  flex-flow: column nowrap;
  padding: 5px 10px;
`

export const CenterScreen = Screen.extend`
  justify-content: center;
  align-items: center;
`

export const DrawerView = styled.View`
  padding: 30px 15px;
  flex: 1;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
`

export const Row = styled.View`
  flex: 1;
  flex-flow: row wrap;
`

export const NoFlexRow = styled.View`
  flex-flow: row wrap;
`

export const Col = styled.View`
  flex: 1;
  flex-flow: column wrap;
`
export const NoFlexCol = styled.View`
  flex-flow: column wrap;
`

export const List = styled.ListView`
  flex: 1;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
`
