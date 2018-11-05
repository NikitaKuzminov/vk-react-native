import { put, call, takeEvery } from 'redux-saga/effects'
import { getToken, getUser, LOGIN } from '../actions/'
import NavigationService from '../navigator/NavigationService'
import { getAccessToken, getFriendList } from '../managers'
import { setToken } from '../navigator/AsyncStorage'

function* login({ payload }) {
  const data = yield call(() => getAccessToken(payload))
  if (data) {
    yield put(getToken(data.access_token))
    yield put(getUser(data.user_id))
    yield call(setToken, data.access_token)
    yield NavigationService.navigate('Home')
  }
}

function* loginWatcher() {
  takeEvery(LOGIN, login)
}

export default loginWatcher
