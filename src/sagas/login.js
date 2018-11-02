import { put, call } from 'redux-saga/effects'
import { getToken } from '../actions/'
import NavigationService from '../navigator/NavigationService'
import { getAccessToken } from '../managers'

function* login({ payload }) {
  const data = yield call(() => getAccessToken(payload))
  if (data) {
    yield put(getToken(data.access_token))
  }

  yield NavigationService.navigate('Home')
}

export default login
