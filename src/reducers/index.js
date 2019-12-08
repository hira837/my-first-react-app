// アプリケーション内に存在する全reducerを統括、結合する。
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 
import events from './events'

// storeを作成するためにexport
export default combineReducers({ events, form })