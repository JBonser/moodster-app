import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
// import { STATUS_BAR_HEIGHT } from '../constants';

class TodayScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {
             <Text>Today</Text>
        }
        </View>
        );
    }
}

TodayScreen.navigationOptions = {
    tabBarIcon: (focused) => (
        <Icon
         name={'md-calendar'}
         size={20}  
         color={focused ? 'white' : 'black'}
        />
    )
};
export default TodayScreen;
