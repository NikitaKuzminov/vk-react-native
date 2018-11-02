import { takeEvery } from 'redux-saga/effects'
import { LOGIN, ADD_FRIENDS } from '../actions/'

import login from './login'
import friends from './friends'

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
  yield takeEvery(ADD_FRIENDS, friends)
}
