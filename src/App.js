import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { Login } from './containers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}
