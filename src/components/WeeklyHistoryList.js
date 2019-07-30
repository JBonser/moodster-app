import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import HistoryMarble from '../components/HistoryMarble';

export default class WeeklyHistoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weeklyList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        //dev grab some dummy moods
        const dummyMoods = [];
        dummyMoods[0] = { id: 'dummyMcKenzie1', name: 'Amazing', colour: '#53d192' };
        dummyMoods[1] = { id: 'dummyMcKenzie2', name: 'Great', colour: '#5e95ed' };
        dummyMoods[2] = { id: 'dummyMcKenzie3', name: 'Okay', colour: '#ede357' };
        dummyMoods[3] = { id: 'dummyMcKenzie4', name: 'Poor', colour: '#e28f53' };
        dummyMoods[4] = { id: 'dummyMcKenzie5', name: 'Awful', colour: '#e05f4e' };

        const dummyList = [];

        for (let i = 0; i < 5; i++) {
            dummyList[i] = {
                key: i,
                color: dummyMoods[i].colour,
                moodName: dummyMoods[i].name,
                date: i + ' days ago',
            };
        }
        
        this.setState({
            weeklyList: dummyList,
            isLoading: false
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        } else {
            return (
                <View style={[styles.scene, { backgroundColor: '#fff' }]} >
                    <ScrollView>
                        {
                            this.state.weeklyList.map((l, i) => (
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
        }
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
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
        color: '#333'
    }
});
