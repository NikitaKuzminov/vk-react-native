import { put, call, select, takeEvery } from 'redux-saga/effects'
import {
  sendMessage,
  getConverstaions as getConversationsManager,
} from '../managers'
import NavigationService from '../navigator/NavigationService'
import { getConversationsSuccess } from '../actions'
import { getToken } from '../navigator/AsyncStorage'
import { getTokenCode } from '../selectors'
import { GET_CONVERSATIONS_REQUEST, SEND_MESSAGE } from '../actions'

export function* send({ payload }) {
  if (payload) {
    yield call(() =>
      sendMessage(payload.id, payload.message, payload.tokenCode),
    )
  }
}

export function* getConversations() {
  let token
  token = yield call(() => getToken())
  if (!token) {
    token = yield select(getTokenCode)
  }
  if (token) {
    const data = yield call(() => getConversationsManager(token))
    if (data && data.response) {
      yield put(getConversationsSuccess(data.response))
    }
  } else {
    yield NavigationService.navigate('Login')
  }
}

function* dialogsWatcher() {
  yield takeEvery(GET_CONVERSATIONS_REQUEST, getConversations)
  yield takeEvery(SEND_MESSAGE, send)
}

export default function* dialogs() {
  yield call(dialogsWatcher)
}
