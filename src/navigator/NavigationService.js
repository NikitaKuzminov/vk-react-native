import { NavigationActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  )
}

function pushScreen(routeName, params) {
  _navigator.dispatch(
    NavigationActions.push({
      routeName,
      params,
    }),
  )
}

// function push(routeName) {
//   _navigator.dispatch(NavigationActions.push({ routeName }))
// }

export default {
  navigate,
  pushScreen,
  setTopLevelNavigator,
}
