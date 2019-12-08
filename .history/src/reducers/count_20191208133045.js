// Actionのタイプをimportしておく
import { READ_EVENTS } from '../actions'

// index.jsに渡す用関数, 
// 引数２つ(state, action)
export default (state = {}, action) => {
  // ACTIONのタイプaction.typeで拾える(incrementかdecrementか)
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  } 
}