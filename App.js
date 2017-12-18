import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  state = {
    inputValue: "",
    people: ""
  }

  render() {
    let tip = 0.00;
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * 0.2
      tip = (Math.round(tip * 100)/ 100).toFixed(2);
    }

    let people = 0 
    if(this.state.people) {
      people = tip/this.state.people
    }
    return (
      <View style={styles.container}>
      <Text>
        ${tip}
      </Text>
        <TextInput 
          value={this.state.inputValue}
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={(text) => this.setState({inputValue: text})}
          /> 
        <Text>
          {people}
        </Text>
        <TextInput 
          value={this.state.people}
          style={styles.input}
          keyboardType='numeric'
          placeholder='Number of People'
          onChangeText={(text) => this.setState({inputValue: text})}
          /> 
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  }
});



