import React, { Component } from "react"
import { connect } from "react-redux"
import Home from "@screens/Home"
import Page from "@screens/Page"

import { Scene, Router, Tabs } from "react-native-router-flux"

const ConnectedRouter = connect()(Router)

class Nav extends Component {
  render = () => {
    return (
      <ConnectedRouter>
        <Tabs key="root">
          <Scene key="home" component={Home} title="Comp1" />
          <Scene key="page" component={Page} title="Comp2" />
        </Tabs>
      </ConnectedRouter>
    )
  }
}

export default Nav
