import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Component
import Home from '../Features/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
