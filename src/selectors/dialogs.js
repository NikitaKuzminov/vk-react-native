import * as R from 'ramda'

const getConversationsBase = R.prop('conversations')

export const getError = R.pipe(
  getConversationsBase(),
  R.prop('error'),
)

export const getConversations = R.pipe(
  getConversationsBase(),
  R.prop('conversations'),
)
