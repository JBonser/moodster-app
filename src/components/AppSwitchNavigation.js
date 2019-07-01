import { createSwitchNavigator } from 'react-navigation';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '../screens/LoginScreen';

export default createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: BottomNavigation }
});
