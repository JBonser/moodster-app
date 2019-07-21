import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default class DrawerProfile extends Component {

    render() {
        return (
            <View>
                <ListItem 
                    containerStyle={styles.container}
                    leftAvatar={<Avatar
                        rounded
                        size='large'
                        title='TU'
                        onPress={() => console.log('Load Profile Pane')}
                        activeOpacity={0.7}
                    />}
                    title={
                        <View>
                            <Text style={styles.userHeading}>Test User</Text>
                        </View>
                    }
                    subtitle={
                        <View>
                            <Text style={styles.teamHeading}>Team Team</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userHeading: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
        
    },
    teamHeading: {
        fontSize: 12,
        color: 'white',
    },
    container: {
        backgroundColor: '#333'
    },
    avatarHolder: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    }
});

