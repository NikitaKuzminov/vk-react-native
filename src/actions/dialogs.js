import { createAction } from 'redux-actions'

export const GET_CONVERSATIONS = 'GET_CONVERSATIONS'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const getConversations = createAction(GET_CONVERSATIONS)
export const sendMessage = createAction(SEND_MESSAGE)
