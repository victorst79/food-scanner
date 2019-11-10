import React from 'react';
import { View, Text, Alert, TouchableHighlight, StyleSheet } from 'react-native';
import globalStyles from './styles';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'FoodScanner',
    headerStyle: {
      backgroundColor: '#41b883',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
    },
    headerBackTitle: null,
    headerTruncatedBackTitle: null,
    headerLeft: null,
  };


  constructor(props) {
    super(props);
    this.state = { text: '', data: [], pwd: '' };
  }

  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text style={ globalStyles.h1} > Bienvenido!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
});
