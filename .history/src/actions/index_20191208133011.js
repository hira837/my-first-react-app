export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => ({
    type: READ_EVENTS
})
// アクションクリエーター = READ_EVENTS
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
// view側でインポート。あるイベントに対し、これらのアクションを実行して、適切な状態遷移を実行するための仕組み
