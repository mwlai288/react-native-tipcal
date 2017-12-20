import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';

const Head = () => (
  <View style={styles.header}>
    <Header>
      <Left/>
      <Body>
        <Title>Tip Calulator</Title>
      </Body>
      <Right />
    </Header>
  </View>
);
  

export default Head;

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    })
  },
});