
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Marble from '../components/Marble';


class TodayScreen extends Component {

    constructor(props) {
        super(props);

      this.state = {
          selectedMarble: '',
          moodTemplate: 'unassigned',
          moods: []
      };
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

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd', height: 500 }}>
            <Text>{this.state.moodTemplate.id}</Text>
            <Text style={styles.selectedMarbleText}>{this.state.moods.selectedMarble}</Text>
            <View style={styles.ballContainer} >
                <View style={styles.row}>
                    {this.state.moods.map(
                        mood => <Marble key={mood.id} marbleColor={mood.colour} marbleMargin={0} />
                    )}    
                </View>
            </View>
            <View style={styles.dropZone}>
                <Text style={styles.text}>Put your balls here</Text>
            </View>
        </View>
        );
    }
}

TodayScreen.navigationOptions = {
    tabBarIcon: (focused) => (
        <Icon
         name={'md-calendar'}
         size={20}  
         color={focused ? 'white' : 'black'}
        />
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        marginTop: 50,
        height: 300
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
    }
  });

export default TodayScreen;
