import React, { Component } from "react"

import { CenterScreen } from "@components/View"
import { Title, Text, Small } from "@components/Text"

class Page extends Component {
  render = () => {
    return (
      <CenterScreen>
        <Title>Wohoo</Title>
        <Text>This text is awesome</Text>
        <Small>@gsulloa</Small>
      </CenterScreen>
    )
  }
}

export default Page
