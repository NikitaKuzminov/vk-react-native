import { takeEvery, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import { LOGIN } from '../actions/'

function* login({ payload }) {
  console.log(payload)

  yield put(NavigationActions.navigate({ routeName: 'Home' }))
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
}
