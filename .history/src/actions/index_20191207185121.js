export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})
// アクションクリエーター = increment, decrement
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
// view側でこれらのアクションをキャッチして、適切な状態を管理、渡していくもの

export const decrement = () => ({
  type: DECREMENT
})