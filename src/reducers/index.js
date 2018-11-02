import { combineReducers } from 'redux'
import authentication from './authentication'
import friends from './friends'
import conversations from './dialogs'

export default combineReducers({ authentication, friends, conversations })
