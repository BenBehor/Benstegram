import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScreen'


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
  Register: RegisterScreen,
  Login: LoginScreen
}, {
  initialRouteName: 'Register',
  defaultNavigationOptions: {
    title: 'BensTegram'
  }
}
)

const App = createAppContainer(navigator)
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
