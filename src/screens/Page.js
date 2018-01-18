import React, { Component } from "react"

import { CenterScreen } from "@components/View"
import { Title, Text, Small } from "@components/Text"
import { Location, Permissions } from "expo"

class Page extends Component {
  state = {
    location: undefined,
  }
  componentWillMount = () => {
    setInterval(this.getLocation, 1000)
  }

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Permission to access location was denied")
    }

    const location = await Location.getCurrentPositionAsync({})
    console.log(location)
    this.setState({ location })
  }
  render = () => {
    return (
      <CenterScreen>
        <Title>Wohoo</Title>
        <Text>This text is awesome</Text>
        <Text>{JSON.stringify(this.state.location, null, 2)}</Text>
        <Small>@gsulloa</Small>
      </CenterScreen>
    )
  }
}

export default Page
