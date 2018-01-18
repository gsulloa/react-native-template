import styled from "styled-components/native"

const DefaultText = styled.Text`
  color: ${props => (props.color ? props.color : "#000")};
  font-family: bebas-neue;
`

export const Title = DefaultText.extend`
  font-size: 32px;
  text-align: ${props => (props.align ? props.align : "center")};
`

export const Text = DefaultText.extend`
  text-align: ${props => (props.align ? props.align : "left")};
`

export const Small = DefaultText.extend`
  font-size: 8px;
  text-align: ${props => (props.align ? props.align : "left")};
`
