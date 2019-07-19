import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


export default class HistoryMarble extends Component {
    render() {
        return (
            <View
                style={[styles.circle, { opacity: 1, backgroundColor: this.props.marbleColor }]}
            />
        );
    }
}

const CIRCLE_RADIUS = 20;
const styles = StyleSheet.create({

    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});
