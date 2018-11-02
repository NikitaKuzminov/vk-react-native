import { takeEvery, put, call } from 'redux-saga/effects'
import { LOGIN } from '../actions/'
import NavigationService from '../navigator/NavigationService'

function* login({ payload }) {
  console.log(payload)

  yield NavigationService.navigate('Home')
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
}
