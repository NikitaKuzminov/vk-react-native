import { combineReducers } from 'redux'
import authentication from './authentication'
import friends from './friends'

export default combineReducers({ authentication, friends })
