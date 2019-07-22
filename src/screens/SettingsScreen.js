import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            color={focused ? 'white' : '#333'}
        />
    )
};


export default SettingsScreen;
