/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
   AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated
} from 'react-native';

type Props = {};



export default class HomeMenu extends Component<Props> {
  constructor(props)
    {
        super(props);

        this.Animation = new Animated.Value(0);
    }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.StartBackgroundColorAnimation();

    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }

  StartBackgroundColorAnimation = () =>
      {
          this.Animation.setValue(0);

          Animated.timing(
              this.Animation,
              {
                  toValue: 1,
                  duration: 15000
              }
          ).start(() => { this.StartBackgroundColorAnimation() });
      }

  render() {
    const BackgroundColorConfig = this.Animation.interpolate(
       {
           inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],

           outputRange: [ '#A32823', '#3F51B5', '#009688', '#03A9F4', '#3F51B5', '#A32823' ]

       });

    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
    })

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    }
    return (

      <Animated.View style = {[ styles.MainContainer, { backgroundColor: BackgroundColorConfig } ]}>

        <Text style={styles.welcome}>Moodsters</Text>
        <Text style={styles.instructions}>Version 0.03</Text>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  welcome: {
    fontFamily: 'Roboto',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    width: 100,
    height: 100,
  }
});
