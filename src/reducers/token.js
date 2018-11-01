import * as R from 'ramda'
import { handleAction } from 'redux-actions'
import { login } from '../actions'

const token = handleAction(
  login,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

export default token
