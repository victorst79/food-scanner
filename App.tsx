import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen'
import globalStyles from './components/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ globalStyles.h1 }>Bienvenido!</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
});
