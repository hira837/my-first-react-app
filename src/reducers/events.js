import _ from 'lodash'
// Actionのタイプをimportしておく
import { 
  READ_EVENTS,
  DELETE_EVENT
} from '../actions'

// index.jsに渡す用関数, 
// 引数２つ(state, action)
export default (events = {}, action) => {
  // ACTIONのタイプaction.typeで拾える(incrementかdecrementか)
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data)
      // [
      //  {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //  {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // ]
      //  ↓　扱いにくい。すべてのデータを取ってこなければならない
      // {
      //  1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
      //  2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // }
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      // eventというオブジェクトから削除
      return { ...events };
      // 新しいメモリ空間上に再配置、更新されたものを=>スプレッド演算子を使う
    default:
      return events
  } 
}