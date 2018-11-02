import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTokenCode, getUser } from '../selectors'
import { addFriends } from '../actions'
import { Friends } from '../components'

const mapStateToProps = R.applySpec({
  tokenCode: getTokenCode,
  userId: getUser,
})

const mapDispatchToProps = {
  addFriends,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends)
