import * as R from 'ramda'
import { connect } from 'react-redux'
import { getConversationHistory } from '../selectors'
import { ConvesationHistory } from '../components'

const mapStateToProps = R.applySpec({
  conversationHistory: getConversationHistory,
})

export default connect(mapStateToProps)(ConvesationHistory)
