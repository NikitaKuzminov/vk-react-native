import { createAction } from 'redux-actions'

export const GET_CONVERSATIONS_REQUEST = 'GET_CONVERSATIONS_REQUEST'
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS'
export const GET_CONVERSATIONS_FAILURE = 'GET_CONVERSATIONS_FAILURE'
export const GET_HISTORY_REQUEST = 'GET_HISTORY_REQUEST'
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS'
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const getConversationsRequest = createAction(GET_CONVERSATIONS_REQUEST)
export const getConversationsSuccess = createAction(GET_CONVERSATIONS_SUCCESS)
export const getConversationsFailure = createAction(GET_CONVERSATIONS_FAILURE)
export const getHistoryRequest = createAction(GET_HISTORY_REQUEST)
export const getHistorySuccess = createAction(GET_HISTORY_SUCCESS)
export const getHistoryFailure = createAction(GET_HISTORY_FAILURE)
export const sendMessage = createAction(SEND_MESSAGE)
