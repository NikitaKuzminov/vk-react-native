import * as R from 'ramda'

const get = R.prop('friends')
export const getFriends = R.pipe(
  get(),
  R.prop('friends'),
)
