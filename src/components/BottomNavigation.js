import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import TodayScreen from '../screens/TodayScreen';
import TeamScreen from '../screens/TeamScreen';

export default createMaterialBottomTabNavigator({

  Today: { screen: TodayScreen },
  History: { screen: HistoryScreen },
  Team: { screen: TeamScreen },
},
  {
    labeled: true,
    shifting: true,
    barStyle: {
      backgroundColor: '#333',
    },
  });
