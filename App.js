import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


import AuthScreen from './src/screens/Auth/Auth'
import AddEmployeeScreen from './src/screens/AddEmployee/AddEmployee'
import EmployeeListScreen from './src/screens/EmployeeList/EmployeeList'
import EmployeeDetailScreen from './src/screens/EmployeeDetail/EmployeeDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

// Register Screens
Navigation.registerComponent(
  "jc8reactnative.AuthScreen",
  () => AuthScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.AddEmployeeScreen",
  () => AddEmployeeScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.EmployeeListScreen",
  () => EmployeeListScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.EmployeeDetailScreen',
  () => EmployeeDetailScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.SideDrawerScreen',
  () => SideDrawerScreen,
  store,
  Provider
)


// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'
  }
})