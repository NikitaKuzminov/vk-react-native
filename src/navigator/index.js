import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen } from '../screens'

const AppStack = createStackNavigator({ Home: HomeScreen })
const AuthStack = createStackNavigator({ Login: LoginScreen })

const AppNavigator = createSwitchNavigator(
  {
    Home: AppStack,
    Login: AuthStack,
  },
  {
    initialRouteName: 'Login',
  },
)

// const AppNavigator = createStackNavigator(
//   {
//     Login: LoginScreen,
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   },
// )

export default AppNavigator
