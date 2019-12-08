// Actionのタイプをimportしておく
import { READ_EVENTS } from '../actions'

// index.jsに渡す用関数, 
// 引数２つ(state, action)
export default (state = {}, action) => {
  // ACTIONのタイプaction.typeで拾える(incrementかdecrementか)
  switch (action.type) {
    case READ_EVENTS:
      console.log(action.response.data)
      // [
      //  {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //  {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // ]
      // {
      //  1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //  2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // }
      return state
    default:
      return state
  } 
}