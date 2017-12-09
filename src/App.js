import React, { Component } from "react"
import PropTypes from "prop-types"
import { Provider, connect } from "react-redux"

import { hydrate } from "./redux/modules/hydratation"
import { devlog } from "./utils/log"

import Home from "./screens/Home"

const mapStateToProps = state => ({
  hydratation: state.hydratation,
})

const mapDispatchToProps = {
  hydrate,
}

export class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    hydratation: PropTypes.object.isRequired,
    hydrate: PropTypes.func.isRequired,
    options: PropTypes.object,
  }

  componentWillMount() {
    const { store, hydrate, options } = this.props
    hydrate(store, options.hydratation)
  }

  render() {
    devlog("App", this.state, this.props)
    if (!this.props.hydratation.done) {
      return null
    }
    return (
      <Provider store={this.props.store}>
        <Home />
      </Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
