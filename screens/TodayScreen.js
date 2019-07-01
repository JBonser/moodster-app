import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Marble from '../components/Marble';
// import { STATUS_BAR_HEIGHT } from '../constants';

class TodayScreen extends Component {
    render() {
        //todo: these colors will pull through from the database and be set accordingly, also number of marbles, marble labels etc will be controlled in this way
        const happyMarble = '#A32823';
        const sadMarble = '#3F51B5';
        const angryMarble = '#009688';
        const fumingMarble = '#e1db4a';
        const okMarble = '#03A9F4';

        return (
        <View style={{ flex: 1, backgroundColor: '#ddd', height: 500 }}>
    
        <View style={styles.ballContainer} >
        <View style={styles.row}>
            <Marble marbleColor={fumingMarble} />
            <Marble marbleColor={happyMarble} />
            <Marble marbleColor={okMarble} />
            <Marble marbleColor={sadMarble} />
            <Marble marbleColor={angryMarble} />
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
      height: 200
    },
    row: {
      flexDirection: 'row'
    },  
    dropZone: {
        opacity: 0.2,
      height: 200,
      backgroundColor: "#00334d",
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
