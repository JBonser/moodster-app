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
            },
            onPanResponderMove: Animated.event([ 
            null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderStart: () => {
                    Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 1000
                    }).start(() =>
                    this.setState({
                        showDraggable: false
                    })
                    ); 
            },
            onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea(gesture)) {
                Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1000
                }).start(() =>
                this.setState({
                    showDraggable: false
                })
                );
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
        return gesture.moveY > 350;
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        };
        
        if (this.state.showDraggable) {
        return (
            <View style={{ position: 'absolute' }}>
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
