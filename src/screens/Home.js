import React, { Component } from "react"
import { Screen } from "@components/View"
import { Text, Title } from "@components/Text"

class Home extends Component {
  render = () => {
    return (
      <Screen>
        <Title>Hello!!!</Title>
        <Text>{JSON.stringify(this.props, null, 2)}</Text>
      </Screen>
    )
  }
}

export default Home
