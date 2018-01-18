import React, { Component } from "react"

import { CenterScreen } from "@components/View"
import { Title, Text } from "@components/Text"

class Loading extends Component {
  state = {
    dots: 0,
  }
  componentWillMount = () => {
    this.interval = setInterval(
      () => this.setState({ dots: (this.state.dots + 1) % 4 }),
      1000
    )
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }
  render = () => {
    return (
      <CenterScreen>
        <Title>Loading{[...Array(this.state.dots)].map(() => ".")}</Title>
        <Text>@gulloa</Text>
      </CenterScreen>
    )
  }
}

export default Loading
