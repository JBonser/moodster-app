import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TeamList from '../components/TeamList';


class TeamScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            index: 0,
            routes: [
                { key: 'team', title: 'Team' }
            ]
        };
    }
    render() {
        return (
            <TabView
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        style={{ backgroundColor: '#333' }}
                    />
                }
                style={{ color: '#000' }}
                navigationState={this.state}
                renderScene={SceneMap({
                    team: TeamList,
                })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

TeamScreen.navigationOptions = {
    tabBarIcon: (focused) => (
        <Icon
            name={'md-people'}
            size={20}
            color={focused ? 'white' : '#333'}
        />
    )
};

export default TeamScreen;
