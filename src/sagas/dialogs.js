import { put, call } from 'redux-saga/effects'
import { sendMessage as sendMessageAction } from '../actions/'
import { sendMessage } from '../managers'

function* send({ payload }) {
  // const data = yield call(() =>
  //   getFriendList(payload.userId, payload.tokenCode),
  // )
  if (payload) {
    yield call(() =>
      sendMessage(payload.id, payload.message, payload.tokenCode),
    )
  }
}

export default send
