// アプリケーション内に存在する全reducerを統括、結合する。
import { combineReducers } from 'redux'
import count from './count'

// storeを作成するためにexport
export default combineReducers({ count })