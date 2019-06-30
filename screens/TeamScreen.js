import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
// import { STATUS_BAR_HEIGHT } from '../constants';

class TeamScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {
             <Text>Team</Text>
        }
        </View>
        );
    }
}

TeamScreen.navigationOptions = {
    tabBarIcon: (focused) => (
        <Icon
         name={'md-people'}
         size={20}
         color={focused ? 'white' : 'black'}
        />
    )
};

export default TeamScreen;
