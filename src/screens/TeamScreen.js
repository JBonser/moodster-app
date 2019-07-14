import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const teamList = [
    {
        name: 'Jordan Bonser',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Team Admin'
    },
    {
        name: 'Glen Eastham',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Team Member'
    },
];

class TeamScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                {
                    teamList.map((l, i) => (
                        <View>
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                            <Divider style={{ backgroundColor: '#c4c4c4' }} />
                        </View>
                    ))

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
