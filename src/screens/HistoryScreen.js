import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem, Divider } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HistoryMarble from '../components/HistoryMarble';

const weeklyList = [];
const dummyMoods = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

dummyMoods[0] = { id: 'dummyMcKenzie1', name: 'Amazing', color: '#53d192' };
dummyMoods[1] = { id: 'dummyMcKenzie2', name: 'Great', color: '#5e95ed' };
dummyMoods[2] = { id: 'dummyMcKenzie3', name: 'Okay', color: '#ede357' };
dummyMoods[3] = { id: 'dummyMcKenzie4', name: 'Poor', color: '#e28f53' };
dummyMoods[4] = { id: 'dummyMcKenzie5', name: 'Awful', color: '#e05f4e' };

for (let i = 0; i < 50; i++) {
    let j = getRandomInt(5);

    weeklyList[i] = {
        key: i,
        color: dummyMoods[j].color,
        moodName: dummyMoods[j].name,
        date: i + ' days ago',
    };
}

const WeeklyRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <ScrollView>
            {
                weeklyList.map((l, i) => (
                    <View key={l.key}>
                        <ListItem
                            title={<View style={styles.titleView}>
                            <Text style={styles.titleText}>{l.moodName}</Text>
                            </View>
                            }
                            rightElement={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.ratingText}>{l.date}</Text>
                                </View>
                            }
                            leftAvatar={<HistoryMarble marbleColor={l.color} />}
                        />
                        <Divider style={{ backgroundColor: '#c4c4c4' }} />
                    </View>
                ))
            }
        </ScrollView>
    </View>
);

const MonthlyRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} />
);

class HistoryScreen extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'weekly', title: 'Weekly' },
            { key: 'monthly', title: 'Monthly' },
        ],
    };

    render() {
        return (
            <TabView
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        style={{ backgroundColor: 'black' }}
                    />
                }
                style={{ color: '#000' }}
                navigationState={this.state}
                renderScene={SceneMap({
                    weekly: WeeklyRoute,
                    monthly: MonthlyRoute,
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
            color={focused ? 'white' : 'black'}
        />
    )
};
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    subtitleView: {
        flexDirection: 'row',
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        color: 'grey'
    },
    titleText: {
        fontSize: 18,
        color: 'black'
    }
});

export default HistoryScreen;
