import React, { Components, Component } from "react"
import { StyleSheet, Text, View } from 'react-native'
import styled from "styled-components/native"

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

const Body = styled.View`
  flex: 1;
  backgroundColor: #fff;
  align-items: center;
  justify-content: center;
` 

const Comp1 = () => <Body>
<Text>Open up App.js to start working on your app!</Text>
<Text>Changes you make will automatically reload.</Text>
<Text>Shake your phone to open the developer menu.</Text>
<Text>Hello!!!</Text>
</Body>

const Comp2 = () => <Text>Woho</Text>

class Home extends Component {
  render = () => {
    return (
      <Router>
        <Tabs key="root">
          <Scene component={Comp1} key="comp1" title="Comp1"/>
          <Scene component={Comp2} key="comp2" title="Comp2"/>
        </Tabs>
      </Router>
    );
  }
}

export default Home