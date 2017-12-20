import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.hello}>Hello from Android!</Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  hello:{
    backgroundColor: '#F0FF00',
    fontSize: 24
  }
});