import React from 'react';
import Expo from 'expo'
import { StyleSheet, View, TextInput, Button, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Left, Body, Title, Right } from 'native-base';

import Head from './ui/Head';
import Values from './ui/Values';


export default class App extends React.Component {
  state = {
    inputValue: "",
    tip: 0.15,
    isReady: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({isReady: true});
  }

  updateCustomTip (customTip) {
    if(customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100
      });
    } else {
      this.setState({ tip: 0 })
    }
  }

  render() {
     if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
    <Container>
      <Head/>
      <View style={styles.container}>
        <Content style={{ width: '100%' }}>
          <Values 
            tipPercent = {this.state.tip}
            bill = {this.state.inputValue}
          />
          <View style={styles.inputs}>
            <TextInput 
              value={this.state.inputValue}
              style={styles.input}
              keyboardType='numeric'
              placeholder='0.00'
              underlineColorAndroid = '#FFF'
              placeholderTextColor="#FFF"
              onChangeText={(text) => this.setState({inputValue: text})}
            />
            <View style={styles.buttonGroup}>
            <Button 
              title='10%'
              onPress={() => this.setState({tip: 0.1})}
            />
            <Button 
              title='18%'
              onPress={() => this.setState({tip: 0.18})}
            />
            <Button 
              title='20%'
              onPress={() => this.setState({tip: 0.2})}
            />
           <TextInput 
              value={(this.state.tip * 100).toString()}
              style={styles.customTip}
              keyboardType='numeric'
              placeholder='25%'
              underlineColorAndroid= '#FFF'
              placeholderTextColor="#FFF"
              onChangeText={(customTip) => this.updateCustomTip(customTip)}
            /> 
            </View>
          </View>
        </Content>
      </View>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#A2870B',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
    color: '#FFF'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTip: {
    color: '#FFF',
    height: 40,
    width: 60,
    padding: 5,
  }
});



