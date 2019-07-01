import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import LoginLogo from '../components/LoginLogo';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends Component {
  constructor(props) {
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

  StartBackgroundColorAnimation = () => {
      this.Animation.setValue(0);

      Animated.timing(
          this.Animation,
          {
              toValue: 1,
              duration: 15000
          }
      ).start(() => { this.StartBackgroundColorAnimation(); });
  }

	render() {
    const BackgroundColorConfig = this.Animation.interpolate(
      {
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],

          outputRange: ['#A32823', '#3F51B5', '#009688', '#03A9F4', '#3F51B5', '#A32823']

      });

		return (
      <Animated.View style={[styles.container, { backgroundColor: BackgroundColorConfig }]}>
				<LoginLogo />
				<LoginForm type="Login" />
        
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={this.signup}>
                          <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
				</View>
			</Animated.View>	
			);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
	flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
	color: 'rgba(255,255,255,0.6)',
	fontSize: 16
  },
  signupButton: {
	color: '#ffffff',
	fontSize: 16,
	fontWeight: '500'
  }
});

