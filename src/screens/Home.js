import React, { Components, Component } from "react"
import { StyleSheet, Text, View } from 'react-native'
import styled from "styled-components/native"

const Body = styled.View`
  flex: 1;
  backgroundColor: #fff;
  align-items: center;
  justify-content: center;
` 

class Home extends Component {
  render = () => {
    return (
      <Body>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello!!!</Text>
      </Body>
    );
  }
}

export default Home