import React from 'react';
import { View, Text, Alert, TouchableHighlight } from 'react-native';
import globalStyles from './styles';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '', data: [], pwd: '' };
  }

  render() {
    return (
      <View>
        <TouchableHighlight
        underlayColor='#005662'
        onPress={() => Alert.alert('Simple Button pressed')}
        style={ globalStyles.btn }>
          <Text style={ globalStyles.btntext }>ESCANEAR PRODUCTO</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
