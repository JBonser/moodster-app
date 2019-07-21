import { createDrawerNavigator } from 'react-navigation';
import BottomNavigation from './BottomNavigation';
import DrawerContent from './DrawerContent';

export default createDrawerNavigator({
    Dashboard: {
        screen: BottomNavigation
    }
}, { 
    edgeWidth: 100,
    contentComponent: DrawerContent
 });

