import { combineReducers } from 'redux'
import authentication from './authentication'
import friends from './friends'
import conversations from './dialogs'
import history from './history'

export default combineReducers({
  authentication,
  friends,
  conversations,
  history,
})
