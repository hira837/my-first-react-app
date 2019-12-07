export const increment = () => ({
    type: "INCREMENT"
})
// アクションクリエーター = increment, decrement
// コンポーネントで使うのでexportしておく

export const decrement = () => ({
  type: "DECREMENT"
})