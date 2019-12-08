// Actionのタイプをimportしておく
import { READ_EVENTS } from '../actions'

// index.jsに渡す用関数, 
// 引数２つ(state, action)
export default (state = {}, action) => {
  // ACTIONのタイプaction.typeで拾える(incrementかdecrementか)
  switch (action.type) {
    case READ_EVENTS:
      console.log(action)
      return state
    default:
      return state
  } 
}