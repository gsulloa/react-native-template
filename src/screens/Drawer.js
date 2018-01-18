import React, { Component } from "react"
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"

import { Screen, NoFlexRow as Row, NoFlexCol as Col } from "@components/View"
import { TouchableRow } from "@components/Button"
import { Text } from "@components/Text"

const BorderedRow = Row.extend`
  border-bottom-color: black;
  border-bottom-width: 1px;
  padding: 15px 0 15px 15px;
  align-items: center;
  justify-content: flex-start;
`

const IconContainer = Col.extend`
  padding: 0 20px 0 0;
`

const ListItem = ({ text, iconName, onPress, ...props }) => {
  return (
    <TouchableRow onPress={onPress}>
      <BorderedRow {...props}>
        <IconContainer>
          <Icon name={iconName} size={20} />
        </IconContainer>
        <Col>
          <Text>{text}</Text>
        </Col>
      </BorderedRow>
    </TouchableRow>
  )
}

ListItem.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  underlayColor: PropTypes.string,
}

class Drawer extends Component {
  state = {
    items: [
      {
        id: 0,
        text: "Image",
        iconName: "image",
        onPress: () => console.log("press image!"),
      },
      {
        id: 1,
        text: "Plane",
        iconName: "plane",
        onPress: () => console.log("press plane!"),
      },
      {
        id: 2,
        text: "Info",
        iconName: "info-circle",
        onPress: () => console.log("press info!"),
      },
    ],
  }

  render = () => {
    return (
      <Screen>
        <Col>
          {this.state.items.map(item => <ListItem key={item.id} {...item} />)}
        </Col>
      </Screen>
    )
  }
}

export default Drawer
