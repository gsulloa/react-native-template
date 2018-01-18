import styled from "styled-components/native"

export const Button = styled.Button`
  color: ${props => (props.color ? props.color : "#fff")};
`
