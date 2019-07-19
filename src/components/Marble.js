import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, Animated } from 'react-native';


export default class Marble extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        };
    }
    componentWillMount() {
        this.val = { x: 0, y: 0 };
        this.state.pan.addListener(value => { this.val = value; });

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                this.state.pan.setOffset({
                    x: this.val.x,
                    y: this.val.y
                });
                this.state.pan.setValue({ x: 0, y: 0 });
                this.props.updateMarbleText(this.props.marbleName, this.props.marbleColor);
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                this.props.updateMarbleText('');
                if (this.isDropArea(gesture)) {
                    fetch('http://127.0.0.1:5000/teams/b36f4bfa-211b-4974-8231-ae8af860f4e1/members/a5f77c4d-cd3c-454c-807e-cbe1e59dca62/moods', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            mood_id: this.props.moodID
                        }),
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log(responseJson);
                            Animated.timing(this.state.opacity, {
                                toValue: 0,
                                duration: 1000
                            })
                                .start(() =>
                                    this.setState({
                                        showDraggable: false
                                    })
                                );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 7
                    }).start();
                }
            }
        });
    }

    isDropArea(gesture) {
        return gesture.moveY > 400;
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        };

        if (this.state.showDraggable) {
            return (
                <View style={{ position: 'absolute', marginTop: this.props.marbleMargin }}>
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        style={
                            [
                                panStyle,
                                styles.circle,
                                {
                                    opacity: this.state.opacity,
                                    backgroundColor: this.props.marbleColor,
                                    marginTop: this.props.marbleMargin
                                }
                            ]}
                    />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ width: '20%', alignItems: 'center' }}>
                {this.renderDraggable()}
            </View>
        );
    }
}

const CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        height: 200
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    row: {
        flexDirection: 'row'
    },
    dropZone: {
        height: 200,
        backgroundColor: '#00334d'
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
