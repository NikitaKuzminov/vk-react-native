import { all, call } from 'redux-saga/effects'

import login from './login'
import dialogs from './dialogs'

export default function* rootSaga() {
  yield all([call(login), call(dialogs)])
}
