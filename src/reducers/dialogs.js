import * as R from 'ramda'
import { handleAction } from 'redux-actions'
import { sendMessage } from '../actions'

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

const user = handleAction(
  getUser,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

export default combineReducers({ authCode, token, user })
