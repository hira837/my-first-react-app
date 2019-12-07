const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: "INCREMENT"
})
// アクションクリエーター = increment, decrement
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく

export const decrement = () => ({
  type: "DECREMENT"
})