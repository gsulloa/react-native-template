import React, { Component } from "react"
import styled from "styled-components/native"
import { Font } from "expo"
import PropTypes from "prop-types"
import { Provider, connect } from "react-redux"

import { hydrate } from "@redux/modules/hydratation"
import { devlog } from "@utils/log"

import { PersistGate } from "redux-persist/es/integration/react"

import Loading from "@screens/LoadingHydrate"
import Nav from "@src/Nav"

const StatusBarBackground = styled.View`
  background-color: black;
  height: 25px;
  margin: 0;
`

const mapStateToProps = state => ({
  hydratation: state.hydratation,
})

const mapDispatchToProps = {
  hydrate,
}

export class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
  }

  state = {
    fontsLoaded: false,
  }
  componentWillMount = async () => {
    await Font.loadAsync({
      "bebas-neue": require("@fonts/bebas-neue.otf"),
    })
    this.setState({
      fontsLoaded: true,
    })
  }

  render() {
    devlog("App", this.state, this.props)
    if (!this.state.fontsLoaded) return null
    return (
      <Provider store={this.props.store}>
        <PersistGate persistor={this.props.persistor} loading={<Loading />}>
          <StatusBarBackground />
          <Nav />
        </PersistGate>
      </Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
