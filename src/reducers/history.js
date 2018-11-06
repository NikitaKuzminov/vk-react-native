import * as R from 'ramda'
import { combineReducers } from 'redux'
import { handleAction, handleActions } from 'redux-actions'
import {
  getHistoryRequest,
  getHistorySuccess,
  getHistoryFailure,
} from '../actions'

const error = handleActions(
  {
    [getHistoryRequest]: R.F,
    [getHistorySuccess]: R.F,
    [getHistoryFailure]: R.T,
  },
  R.F,
)

const items = handleAction(
  getHistorySuccess,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  [],
)

export default combineReducers({ error, items })
