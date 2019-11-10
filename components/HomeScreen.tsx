import React from 'react';
import { View, Text, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import globalStyles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <TouchableHighlight
        underlayColor='#005662'
        onPress={() => Alert.alert('Simple Button pressed')}
        style={globalStyles.btn}>
          <Text style={globalStyles.btntext}>PULSA AQUI</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
