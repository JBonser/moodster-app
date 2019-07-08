import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

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
