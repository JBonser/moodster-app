import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppSwitchNavigation from './src/components/AppSwitchNavigation';
import store from './src/store';

// const MainNavigator = createStackNavigator({
//   Main: { screen: HomeScreen }
// });

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} />
      </AppContainer>
    );
  }
}

const AppContainer = createAppContainer(AppSwitchNavigation);

export default App;

