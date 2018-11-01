import AppNavigator from '../navigator'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

const navReducer = createNavigationReducer(AppNavigator)

export default navReducer
