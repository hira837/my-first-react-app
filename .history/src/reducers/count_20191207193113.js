// Actionのタイプをimportしておく
import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

// index.jsに渡すよう 関数, 引数２つ(state, action)
export default (state = initialState, action) => {
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