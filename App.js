import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Shared/Navigator';
import {Provider} from 'react-redux';
import Store from './src/Store/store';

const App = (props) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
