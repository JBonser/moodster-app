import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View 
} from 'react-native';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
                {/* <Image 
                    style={{ width: 40, height: 70 }}
                    source={('../assets/icons/logo.png')} 
                /> */}
                <Text style={styles.logoText}>Moodster</Text>	
			</View>
        );
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText: {
    fontFamily: 'YellowGinger',
	marginVertical: 15,
	fontSize: 50,
	color: 'rgba(255, 255, 255, 0.7)'
  }
});
