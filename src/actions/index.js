import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// axiosは戻り値がpromiseなのでasyc awaitを使う
export const readEvents = () => async dispatch => {
    // pureなオブジェクトを返さなければばならい。ここで非同期処理はかけない
    // それを可能にする => redux thunk・・・関数を返せるようになる
    const response =  await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}
// アクションクリエーター = READ_EVENTS
// コンポーネントで使うのでexportしておく
// 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
// view側でインポート。あるイベントに対し、これらのアクションを実行して、適切な状態遷移を実行するための仕組み

export const postEvents = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENTS, response });
};

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENT, id });
};

