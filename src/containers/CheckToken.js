import * as R from 'ramda'
import { connect } from 'react-redux'
import { getConversationsRequest, getHistoryRequest } from '../actions'
import { getConversations } from '../selectors'

import { CheckToken } from '../components'

const mapStateToProps = R.applySpec({
  conversations: getConversations,
})

const mapDispatchToProps = {
  getConversationsRequest,
  getHistoryRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckToken)
