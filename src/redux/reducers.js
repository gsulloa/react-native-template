import { combineReducers } from "redux"

function testReducer(state = {}, action) {
  return state
}

const reducer = combineReducers({
  testReducer
})

export default reducer
