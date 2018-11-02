import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTokenCode, getUser, getFriendlist } from '../selectors'
import { addFriends, sendMessage } from '../actions'
import { Friends } from '../components'

const mapStateToProps = R.applySpec({
  tokenCode: getTokenCode,
  userId: getUser,
  friendlist: getFriendlist,
})

const mapDispatchToProps = {
  addFriends,
  sendMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends)
