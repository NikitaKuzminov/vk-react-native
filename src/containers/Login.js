import { connect } from 'react-redux'
import { login } from '../actions'
import { Login } from '../components'

const mapDispatchToProps = {
  login,
}

export default connect(
  null,
  mapDispatchToProps,
)(Login)
