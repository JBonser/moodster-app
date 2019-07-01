import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
// import { STATUS_BAR_HEIGHT } from '../constants';

class HomeScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {
            <Text>Home</Text>
        }
        </View>
        );
    }
}

export default HomeScreen;
