import { takeEvery } from 'redux-saga/effects'
import {
  LOGIN,
  ADD_FRIENDS,
  SEND_MESSAGE,
  GET_CONVERSATIONS,
} from '../actions/'

import login from './login'
import friends from './friends'
import { send, getConversations } from './dialogs'

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
  yield takeEvery(ADD_FRIENDS, friends)
  yield takeEvery(SEND_MESSAGE, send)
  yield takeEvery(GET_CONVERSATIONS, getConversations)
}
