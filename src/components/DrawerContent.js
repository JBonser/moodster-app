import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider, ListItem } from 'react-native-elements';
import DrawerProfile from './DrawerProfile';

export default class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weeklyList: [],
            isLoading: true
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <DrawerProfile />
                <Divider style={{ backgroundColor: '#c4c4c4' }} />
                <ScrollView>
                    <TouchableOpacity onPress={() => console.log('Load Team Select Pane')}>
                        <ListItem 
                            leftIcon={<Icon name={'md-swap'} size={20} color={'#333'} />}
                            title={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.menuText}>Select Team</Text>
                                </View>
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Load Theme Select Pane')}>
                        <ListItem 
                            leftIcon={<Icon name={'md-brush'} size={20} color={'#333'} />}
                            title={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.menuText}>Change Theme</Text>
                                </View>
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Load About')}>
                        <ListItem 
                            leftIcon={
                                <Icon 
                                    name={'md-information-circle'} 
                                    size={20} color={'#333'} 
                                />
                            }
                            title={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.menuText}>About</Text>
                                </View>
                            }
                        />
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => console.log('Log out')}>
                        <View style={styles.settingsIcon}>
                        <Text style={styles.logoutText}>Log Out</Text>
                        <Icon 
                            name={'md-exit'}
                            size={20}
                            color={'white'}
                        />
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    footerContainer: {
      padding: 20,
      backgroundColor: '#333'
    },
    settingsIcon: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
       alignContent: 'flex-end',
    },
    logoutText: { 
        color: 'white'
    },
    menuText: {
        color: 'black',
    }
});

