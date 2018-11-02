import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import RootStack from './navigator'
import NavigationService from './navigator/NavigationService'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    )
  }
}
