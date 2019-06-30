import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
// import { STATUS_BAR_HEIGHT } from '../constants';

class SettingsScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {
             <Text> Settings</Text>
        }
        </View>
        );
    }
}

SettingsScreen.navigationOptions = {
    tabBarIcon: (focused) => (
        <Icon
         name={'md-cog'}
         size={20}
         color={focused ? 'white' : 'black'}
        />
    )
};


export default SettingsScreen;
