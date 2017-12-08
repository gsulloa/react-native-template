import { persistCombineReducers } from "redux-persist"
import storage from 'redux-persist/es/storage' // default: AsyncStorage

import hydratation from "./modules/hydratation"

const config = {
  key: 'root',
  storage,
}

function test(state = [], action) {
  return state
}

const reducer = persistCombineReducers(config, {
  hydratation,
  test,
})

export default reducer
