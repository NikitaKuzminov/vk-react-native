import { put, call, select, takeEvery } from 'redux-saga/effects'
import { sendMessage, getConverstaions, getHistory } from '../managers'
import NavigationService from '../navigator/NavigationService'
import {
  getConversationsSuccess,
  getHistorySuccess,
  getToken as getTokenAction,
} from '../actions'
import { getToken } from '../repositories'
import { getTokenCode } from '../selectors'
import {
  GET_CONVERSATIONS_REQUEST,
  GET_HISTORY_REQUEST,
  SEND_MESSAGE,
} from '../actions'

export function* send({ payload }) {
  if (payload) {
    yield call(() =>
      sendMessage(payload.id, payload.message, payload.tokenCode),
    )
  }
}

export function* getHistoryWatcher({ payload }) {
  if (payload) {
    const token = yield select(getTokenCode)
    if (token) {
      const data = yield call(getHistory, {
        access_token: token,
        id: payload,
      })
      yield put(getHistorySuccess(data))
      yield NavigationService.navigate('ConversationHistory')
    } else {
      console.log('fail here')
    }
  }
}

export function* getConversationsWatcher() {
  let token
  token = yield select(getTokenCode)
  if (!token) {
    token = yield call(getToken)
    yield put(getTokenAction(token))
  }
  if (token) {
    const data = yield call(() => getConverstaions(token))
    if (data && data.response) {
      yield put(getConversationsSuccess(data.response))
    } else {
      yield NavigationService.navigate('Login')
    }
  } else {
    yield NavigationService.navigate('Login')
  }
}

function* dialogsWatcher() {
  yield takeEvery(GET_CONVERSATIONS_REQUEST, getConversationsWatcher)
  yield takeEvery(GET_HISTORY_REQUEST, getHistoryWatcher)
  yield takeEvery(SEND_MESSAGE, send)
}

export default function* dialogs() {
  yield call(dialogsWatcher)
}
