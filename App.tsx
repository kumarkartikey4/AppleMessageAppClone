import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import MessageList from './src/pages/MessagesList';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Filters"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="list"
          component={MessageList}
          options={{
            title: '',
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor: '#000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
