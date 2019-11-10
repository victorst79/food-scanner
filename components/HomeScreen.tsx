import React from 'react';
import { Button, Alert } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}>

      </Button>
    )
  }
}
