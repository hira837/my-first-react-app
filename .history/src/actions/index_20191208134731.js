import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL =  'https://udemy-utils.herokapp.com/api/vi'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    // pureなオブジェクトを返さなければばならい。ここで非同期処理はかけない
    // それを可能にする => redux thunk 関数を返せるようになる
    const response =  await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({ type: READ_EVENTS, response })
}
// アクションクリエーター = READ_EVENTS
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
// view側でインポート。あるイベントに対し、これらのアクションを実行して、適切な状態遷移を実行するための仕組み
