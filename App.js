import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppSwitchNavigation from './src/components/AppSwitchNavigation';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} ><StatusBar hidden /></Provider>
      </AppContainer>
    );
  }
}

const AppContainer = createAppContainer(AppSwitchNavigation);

export default App;

