import * as R from 'ramda'
import { connect } from 'react-redux'
import { getConversations } from '../actions'
import { getTokenCode } from '../selectors'
import { CheckToken } from '../components'

const mapStateToProps = R.applySpec({
  token: getTokenCode,
})

const mapDispatchToProps = {
  getConversations,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckToken)
