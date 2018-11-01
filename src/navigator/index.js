import { createStackNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen } from '../screens'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  },
)

export default AppNavigator
