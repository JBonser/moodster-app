import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, TouchableOpacity, 
    TouchableWithoutFeedback, Animated, Modal, 
    Dimensions, Switch, TextInput, AsyncStorage 
} from 'react-native';
import { ListItem, Divider, Button } from 'react-native-elements';
import LoginLogo from '../components/LoginLogo';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlScreenVisible: false,
            customUrl: '',
            useCustomUrl: false
        };
        this.getCustomUrlSettings = this.getCustomUrlSettings.bind(this);
        this.saveCustomUrlSettings = this.saveCustomUrlSettings.bind(this);
        this.setUrlScreenVisible = this.setUrlScreenVisible.bind(this);
        this.setUseCustomUrl = this.setUseCustomUrl.bind(this);
        this.Animation = new Animated.Value(0);
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.getCustomUrlSettings();
    }

    componentDidMount() {
        this.StartBackgroundColorAnimation();
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500
        }).start();
    }

    setUrlScreenVisible(bool) {
        this.setState({ urlScreenVisible: bool });
    }

    setUseCustomUrl(bool) {
        this.setState({ useCustomUrl: bool });
    }

    async getCustomUrlSettings() {
        const customUrlSettings = await AsyncStorage.getItem('customUrlObj'); 
        const parsedSettings = await JSON.parse(customUrlSettings) || []; 
        global.customUrl = parsedSettings.customUrl;
        global.useCustomUrl = parsedSettings.useCustomUrl;
        await this.setState({ customUrl: parsedSettings.customUrl });
        await this.setState({ useCustomUrl: parsedSettings.useCustomUrl });
    }

    async saveCustomUrlSettings(bool, customUrl) {
        const customUrlObj = {
            customUrl: customUrl,
            useCustomUrl: bool
        };
        await AsyncStorage.setItem('customUrlObj', JSON.stringify(customUrlObj));
        this.getCustomUrlSettings(); 
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
                <Modal 
                    transparent
                    animationType="slide"
                    visible={this.state.urlScreenVisible}
                    onBackdropPress={() => { this.setUrlScreenVisible(false); }}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={0}
                        onPressOut={() => { this.setUrlScreenVisible(false); }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center'
                            }}
                        >
                            <TouchableWithoutFeedback>
                            <View style={styles.modalBox}>
                                <ListItem 
                                    containerStyle={{ backgroundColor: '#333' }}
                                    style={{ backgroundColor: '#333' }}
                                    title={<View style={styles.titleView}>
                                            <Text style={styles.modalText}>Use Custom Url</Text>
                                            </View>
                                            }
                                    rightElement={
                                        <Switch
                                            onValueChange={(value) => { 
                                                this.setUseCustomUrl(value); 
                                            }}
                                            value={this.state.useCustomUrl} 
                                        />
                                    }
                                />
                                <Divider style={{ backgroundColor: '#969696' }} />
                                <View style={{ height: 75 }}>
                                    <TextInput
                                        value={this.state.customUrl} 
                                        style={styles.inputBox}
                                        editable={this.state.useCustomUrl}
                                        onChangeText={(customUrl) => this.setState({ customUrl })}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        placeholder="Custom URL"
                                        placeholderTextColor="#ffffff"
                                        selectionColor="#fff"
                                        keyboardType="email-address"
                                    />
                                </View>
                                <Divider style={{ backgroundColor: '#969696' }} />
                                <View style={{ height: 75 }}>
                                    <Button
                                    buttonStyle={styles.button}
                                    titleStyle={styles.buttonText}
                                    onPress={() => { 
                                        this.saveCustomUrlSettings(
                                            this.state.useCustomUrl, 
                                            this.state.customUrl
                                        )
                                        .done(this.setUrlScreenVisible(false)); 
                                    }}
                                    title="Save"
                                    accessibilityLabel="Save the URL settings"
                                    />
                                </View>
                            </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <LoginLogo />
                <LoginForm type="Login" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}> Signup</Text>
                    </TouchableOpacity>
                                    </View>
                <View style={styles.signupTextCont}>
                    <TouchableOpacity onPress={() => { this.setUrlScreenVisible(true); }}>
                        <Text style={styles.signupButton}> Choose URL</Text>
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
    modalContainer: {
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
    },
    modalText: {
        fontSize: 16,
        color: 'white'
    },
    modalList: {
        backgroundColor: '#333'
    },
    modalBox: {
        width: Dimensions.get('window').width, 
        height: 200, 
        backgroundColor: '#333'
    },
    inputBox: {
        marginLeft: 10,
        marginRight: 10,
       flex: 1,
       flexDirection: 'row',
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
      },
      button: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 10
     },
     buttonText: {
        color: '#333'
     }
});

