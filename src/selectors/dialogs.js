import * as R from 'ramda'

const getConversationsBase = R.prop('conversations')
const getConversationBase = R.prop('history')

export const getConvesationsError = R.pipe(
  getConversationsBase(),
  R.prop('error'),
)

export const getConversations = R.pipe(
  getConversationsBase(),
  R.prop('conversations'),
)

export const getConvesationHistoryError = R.pipe(
  getConversationBase(),
  R.prop('error'),
)

export const getConversationHistory = R.pipe(
  getConversationBase(),
  R.prop('items'),
)
