import * as R from 'ramda'
import { connect } from 'react-redux'
import { getConversationsRequest } from '../actions'
import { getConversations } from '../selectors'
import { getTokenCode } from '../selectors'
import { CheckToken } from '../components'

const mapStateToProps = R.applySpec({
  token: getTokenCode,
  conversations: getConversations,
})

const mapDispatchToProps = {
  getConversationsRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckToken)
