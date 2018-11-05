import { createAction } from 'redux-actions'

export const GET_CONVERSATIONS_REQUEST = 'GET_CONVERSATIONS_REQUEST'
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS'
export const GET_CONVERSATIONS_FAILURE = 'GET_CONVERSATIONS_FAILURE'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const getConversationsRequest = createAction(GET_CONVERSATIONS_REQUEST)
export const getConversationsSuccess = createAction(GET_CONVERSATIONS_SUCCESS)
export const getConversationsFailure = createAction(GET_CONVERSATIONS_FAILURE)
export const sendMessage = createAction(SEND_MESSAGE)
