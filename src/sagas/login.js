import { put, call } from 'redux-saga/effects'
import { getToken, getUser } from '../actions/'
import NavigationService from '../navigator/NavigationService'
import { getAccessToken, getFriendList } from '../managers'

function* login({ payload }) {
  const data = yield call(() => getAccessToken(payload))
  if (data) {
    yield put(getToken(data.access_token))
    yield put(getUser(data.user_id))
  }
  yield call(() => getFriendList(data.user_id, data.access_token))
  yield NavigationService.navigate('Home')
}

export default login
