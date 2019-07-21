import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WeeklyHistoryList from '../components/WeeklyHistoryList';
import MonthlyHistoryList from '../components/MonthlyHistoryList';


class HistoryScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            index: 0,
            routes: [
                { key: 'weekly', title: 'Weekly' },
                { key: 'monthly', title: 'Monthly' },
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
                    weekly: WeeklyHistoryList,
                    monthly: MonthlyHistoryList,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        ); 
    }
}

HistoryScreen.navigationOptions = {

    tabBarIcon: (focused) => (
        <Icon
            name={'md-timer'}
            size={20}
            color={focused ? 'white' : '#333'}
        />
    )
};

export default HistoryScreen;
