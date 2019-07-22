import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

export default class TeamList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            teamList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const team = [
                {
                    name: 'Jordan Bonser',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Team Admin'
                },
                {
                    name: 'Glen Eastham',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Team Member'
                },
            ];
    
        this.setState({
            teamList: team,
            isLoading: false
        });
    }

    render() {
            return (
                <View style={[styles.scene, { backgroundColor: '#fff' }]} >
                   {
                    this.state.teamList.map((l, i) => (
                        <View key={i}>
                            <ListItem
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                chevron
                            />
                            <Divider style={{ backgroundColor: '#c4c4c4' }} />
                        </View>
                    ))

                }
                </View>
            );
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    scene: {
        flex: 1,
    },
    subtitleView: {
        flexDirection: 'row',
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        color: 'grey'
    },
    titleText: {
        fontSize: 18,
        color: '#333'
    }
});
