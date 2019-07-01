import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { StyleSheet } from 'react-native';
// import HomeScreen from './../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import TodayScreen from '../screens/TodayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TeamScreen from '../screens/TeamScreen';

export default createMaterialBottomTabNavigator({
    
    Today: { screen: TodayScreen },
    History: { screen: HistoryScreen },
    Team: { screen: TeamScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    labeled: true,
    shifting: true,
    barStyle: {
      backgroundColor: '#c63535',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  });
