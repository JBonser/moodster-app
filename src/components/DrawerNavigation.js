import { createDrawerNavigator } from 'react-navigation';
import BottomNavigation from './BottomNavigation';


export default createDrawerNavigator({
    Dashboard: {
        screen: BottomNavigation
    }
});
