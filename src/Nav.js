import React, { Component } from "react"
import { connect } from "react-redux"
import { Comp1, Comp2 } from "./screens/Home"

import { Scene, Router, Tabs } from "react-native-router-flux"

const ConnectedRouter = connect()(Router)

class Nav extends Component {
  render = () => {
    return (
      <ConnectedRouter>
        <Tabs key="root">
          <Scene key="comp1" component={Comp1} title="Comp1" />
          <Scene key="comp2" component={Comp2} title="Comp2" />
        </Tabs>
      </ConnectedRouter>
    )
  }
}

export default Nav
