import { createAction } from 'redux-actions'

export const LOGIN = 'LOGIN'
export const GET_TOKEN = 'GET_TOKEN'
export const login = createAction(LOGIN)
export const getToken = createAction(GET_TOKEN)
