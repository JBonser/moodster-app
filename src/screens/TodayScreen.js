import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Marble from '../components/Marble';
import MarbleJar from '../components/MarbleJar';


class TodayScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMarbleColor: '',
            selectedMarble: '',
            moodTemplate: 'unassigned',
            moods: []
        };
        this.updateMarbleText = this.updateMarbleText.bind(this);
    }

    componentDidMount() {
        // const moodTemplate = fetch('http://localhost:5000/mood_templates/5d86024b-1bae-42f1-8a2c-028fe18e33e0')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //             this.setState({
        //                 moodTemplate: responseJson.data,
        //             }); 
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        //todo api needs updating to enable selecting all the moods from a particular mood template
        return fetch('http://127.0.0.1:5000/moods/')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    moods: responseJson.data,
                });
            })
            .catch((error) => {
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
                        )

                        }
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
