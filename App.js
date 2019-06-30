import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import BottomNavigation from './components/BottomNavigation';
import store from './store';

// const MainNavigator = createStackNavigator({
//   Main: { screen: HomeScreen }
// });


const AppContainer = createAppContainer(BottomNavigation);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} />
  
      </AppContainer>
    );
  }
}

export default App;
