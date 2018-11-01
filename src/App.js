import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { createStackNavigator } from 'react-navigation'
import { Login as LoginScreen } from './containers'
import { Home as HomeScreen } from './screens'
import RootStack from './navigator'
import { Navigator } from './containers/'

// const RootStack = createStackNavigator(
//   {
//     Login: LoginScreen,
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   },
// )

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <RootStack /> */}
        <Navigator />
      </Provider>
    )
  }
}
