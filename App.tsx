import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native' 

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Apple Message App Clone</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

export default App;