import { createSwitchNavigator } from 'react-navigation';
import AppDrawerNavigator from './DrawerNavigation';
import LoginScreen from '../screens/LoginScreen';

export default createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});
