import * as R from 'ramda'
import { handleAction } from 'redux-actions'
import { getConversations } from '../actions'

const conversations = handleAction(
  getConversations,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

export default conversations
