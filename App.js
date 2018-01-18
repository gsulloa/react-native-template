import React from "react"
import App from "./src/App"
import Api from "./src/Api"
import configureStore from "./src/redux/store"
import { devlog } from "./src/utils/log"

const client = new Api(process.env.REACT_APP_API || "http://localhost:3000")

// Redux required objects
const initialState = {}
const storeConfiguration = configureStore(initialState, { api: client })

devlog("index.js", "store", storeConfiguration)

export default class RootApp extends React.Component {
  render() {
    return <App {...storeConfiguration} />
  }
}
