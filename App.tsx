import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import MessageList from './src/pages/MessagesList';
import MessageDetails from './src/pages/MessageDetails';
import LoadingScreen from './src/components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
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
        <Stack.Screen
          name="detail"
          component={MessageDetails}
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
