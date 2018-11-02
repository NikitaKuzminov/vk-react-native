import * as R from 'ramda'
import { combineReducers } from 'redux'
import { handleAction } from 'redux-actions'
import { addFriends } from '../actions'

const friends = handleAction(
  addFriends,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  {},
)

export default friends

//export default combineReducers({ friends })
