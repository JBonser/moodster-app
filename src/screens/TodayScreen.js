import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Marble from '../components/Marble';
import MarbleJar from '../components/MarbleJar';


class TodayScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMarbleColor: 'white',
            selectedMarble: '',
            moodTemplate: 'unassigned',
            moods: []
        };
        this.updateMarbleText = this.updateMarbleText.bind(this);
    }

    componentDidMount() {
        if (!global.useCustomUrl) {
            global.customUrl = '127.0.0.1:5000';
        }
        //todo api needs updating to enable selecting all the moods from a particular mood template
        return fetch('http://' + global.customUrl + '/moods/')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    moods: responseJson.data,
                });
            })
            .catch((error) => {
                //dev grab some dummy marbles if unable to connect to dev api
                const dummyMoods = [];
                dummyMoods[0] = { id: 'dummyMcKenzie1', name: 'Amazing', colour: '#53d192' };
                dummyMoods[1] = { id: 'dummyMcKenzie2', name: 'Great', colour: '#5e95ed' };
                dummyMoods[2] = { id: 'dummyMcKenzie3', name: 'Okay', colour: '#ede357' };
                dummyMoods[3] = { id: 'dummyMcKenzie4', name: 'Poor', colour: '#e28f53' };
                dummyMoods[4] = { id: 'dummyMcKenzie5', name: 'Awful', colour: '#e05f4e' };
                this.setState({
                    moods: dummyMoods
                });
                console.log(error);
            });
    }

    updateMarbleText(text, textColor) {
        this.setState({
            selectedMarble: text,
            selectedMarbleColor: textColor
        });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.marbleTextContainer}>
                    <Text style={[styles.marbleText, { color: this.state.selectedMarbleColor }]}>
                        {this.state.selectedMarble}
                    </Text>
                </View>
                <Text style={styles.selectedMarbleText}>{this.state.moods.selectedMarble}</Text>
                <View style={styles.ballContainer} >
                    <View style={styles.row}>
                        {this.state.moods.map(
                            (mood, index) => <Marble
                                updateMarbleText={this.updateMarbleText}
                                moodID={mood.id}
                                key={mood.id}
                                marbleName={mood.name}
                                marbleColor={mood.colour}
                                marbleMargin={index % 2 === 0 ? 40 : 0}
                            />,
                        )}
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <MarbleJar style={styles.marbleJar} />
                </View>
            </View >
        );
    }
}

TodayScreen.navigationOptions = {
    tabBarIcon: () => (
        <Icon
            name={'md-calendar'}
            size={20}
            color={'white'}
        />
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2C2F33'
    },
    ballContainer: {
        height: 200
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dropZone: {
        opacity: 0.2,
        height: 200,
        backgroundColor: '#00334d',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    marbleJar: {
        opacity: 0.9
    },
    marbleText: {
        fontFamily: 'YellowGinger',
        marginVertical: 15,
        fontSize: 50
    },
    marbleTextContainer: {
        marginTop: 50,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});

export default TodayScreen;
