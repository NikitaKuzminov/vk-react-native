import * as R from 'ramda'
import { combineReducers } from 'redux'
import { handleAction, handleActions } from 'redux-actions'
import {
  getConversationsRequest,
  getConversationsSuccess,
  getConversationsFailure,
} from '../actions'

const conversations = handleAction(
  getConversationsSuccess,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const error = handleActions(
  {
    [getConversationsRequest]: R.F,
    [getConversationsSuccess]: R.F,
    [getConversationsFailure]: R.T,
  },
  R.F,
)

export default combineReducers({ error, conversations })
