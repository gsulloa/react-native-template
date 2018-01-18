import React, { Component } from "react"
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"

import { Screen, NoFlexRow as Row, NoFlexCol as Col } from "@components/View"
import { Text } from "@components/Text"

const BorderedRow = Row.extend`
  border-bottom-color: black;
  border-bottom-width: 1px;
  padding: 15px 0 15px 15px;
  align-items: center;
`

const IconContainer = Col.extend`
  padding: 0 20px 0 0;
`

const ListItem = ({ text, iconName, ...props }) => {
  return (
    <BorderedRow {...props}>
      <IconContainer>
        <Icon name={iconName} size={20} />
      </IconContainer>
      <Col>
        <Text>{text}</Text>
      </Col>
    </BorderedRow>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
}

class Drawer extends Component {
  state = {
    items: [
      { id: 0, text: "Image", iconName: "image" },
      { id: 1, text: "Plane", iconName: "plane" },
      { id: 2, text: "Info", iconName: "info-circle" },
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
