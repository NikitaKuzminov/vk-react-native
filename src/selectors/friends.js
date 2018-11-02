import * as R from 'ramda'

const getFriends = R.prop('friends')
export const getFriendlist = R.pipe(
  getFriends(),
  R.prop('items'),
)
