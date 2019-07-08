import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';


class HistoryScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {
             <Text> History</Text>
        }
        </View>
        );
    }
}

HistoryScreen.navigationOptions = {
    
    tabBarIcon: (focused) => (
        <Icon
         name={'md-timer'}
         size={20}
         color={focused ? 'white' : 'black'}
        />
    )
};

export default HistoryScreen;
