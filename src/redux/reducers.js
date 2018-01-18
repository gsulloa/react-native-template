import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/es/storage" // default: AsyncStorage

import hydratation from "./modules/hydratation"
// import routes from "./modules/routes"

const config = {
  key: "root",
  storage,
  blacklist: ["hydratation"],
}

const reducer = persistCombineReducers(config, {
  hydratation,
  // routes,
})

export default reducer
