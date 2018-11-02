import * as R from 'ramda'
import { combineReducers } from 'redux'
import { handleAction } from 'redux-actions'
import { login, getToken } from '../actions'

const authCode = handleAction(
  login,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const token = handleAction(
  getToken,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

export default combineReducers({ authCode, token })
