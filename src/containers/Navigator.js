import { connect } from 'react-redux'
import { Navigator } from '../components'

const mapStateToProps = state => ({
  state: state.nav,
})

export default connect(mapStateToProps)(Navigator)
