import React, { Component } from "react"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/FontAwesome"

import DrawerComponent from "@screens/Drawer"

import Home from "@screens/Home"
import Page from "@screens/Page"

import { Scene, Router, Tabs, Drawer } from "react-native-router-flux"

const ConnectedRouter = connect()(Router)

class Nav extends Component {
  render = () => {
    return (
      <ConnectedRouter>
        <Drawer
          drawerIcon={() => <Icon name="navicon" size={30} />}
          contentComponent={DrawerComponent}
        >
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
        </Drawer>
      </ConnectedRouter>
    )
  }
}

export default Nav
