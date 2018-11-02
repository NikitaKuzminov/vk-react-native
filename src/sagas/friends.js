import { put, call } from 'redux-saga/effects'
import { addFriends } from '../actions/'
import { getFriendList } from '../managers'

function* friends({ payload }) {
  const data = yield call(() =>
    getFriendList(payload.userId, payload.tokenCode),
  )
  console.log(data)
  if (data) {
    yield put(addFriends(data))
  }
}

export default friends
