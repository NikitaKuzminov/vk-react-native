import { put, call } from 'redux-saga/effects'
import {
  sendMessage,
  getConverstaions as getConversationsManager,
} from '../managers'
import NavigationService from '../navigator/NavigationService'
import { getConversations as getConversationsAction } from '../actions'

export function* send({ payload }) {
  if (payload) {
    yield call(() =>
      sendMessage(payload.id, payload.message, payload.tokenCode),
    )
  }
}

export function* getConversations({ payload }) {
  if (payload) {
    console.log(payload)
    const data = yield call(() => getConversationsManager(payload))
    if (data && data.response) {
      yield put(getConversationsAction(data.response))
    }
  } else {
    yield NavigationService.navigate('Login')
  }
}
