import * as R from 'ramda'

const getAuthentication = R.prop('authentication')

export const getAuthCode = R.pipe(
  getAuthentication,
  R.prop('authCode'),
)

export const getTokenCode = R.pipe(
  getAuthentication,
  R.prop('token'),
)

export const getUser = R.pipe(
  getAuthentication,
  R.prop('user'),
)
