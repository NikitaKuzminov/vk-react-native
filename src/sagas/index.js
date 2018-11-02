import { takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../actions/'

import login from './login'

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
}
