import React, { Component } from "react"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/FontAwesome"

import Home from "@screens/Home"
import Page from "@screens/Page"

import { Scene, Router, Tabs } from "react-native-router-flux"

const ConnectedRouter = connect()(Router)

class Nav extends Component {
  render = () => {
    return (
      <ConnectedRouter>
        <Tabs key="root">
          <Scene
            key="home"
            component={Home}
            title="Home"
            icon={() => <Icon name="home" size={30} />}
          />
          <Scene
            key="page"
            component={Page}
            title="Page"
            icon={() => <Icon name="book" size={30} />}
          />
        </Tabs>
      </ConnectedRouter>
    )
  }
}

export default Nav
