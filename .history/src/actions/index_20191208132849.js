export const READ_EVENTS = 'READ_EVENTS'

export const read_events = () => ({
    type: READ_EVENTS
})
// アクションクリエーター = READ_EVENTS, decrement
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
// view側でインポート。あるイベントに対し、これらのアクションを実行して、適切な状態遷移を実行するための仕組み

export const decrement = () => ({
  type: DECREMENT
})