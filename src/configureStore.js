import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { watchLogin } from './sagas'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const sagaMiddleware = createSagaMiddleware()

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, middleware)),
)

sagaMiddleware.run(watchLogin)

export default store
