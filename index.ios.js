/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TabBarIOS,
  View
} from 'react-native';
import CustomHeader from './src/Header.js'
import BasicListItem from './src/BasicListItem.js'
import BottomBar from './src/BottomBar.js'
import BottomBarItem from './src/BottomBarItem.js'

export default class class1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader title={"Trending"}/>
           <ScrollView style={styles.scroll}>
              <BasicListItem title={"World Happiness Report"} subtitle={"18k people talking about this"}/>
              <BasicListItem title={"Stephen Hawking"} subtitle={"120k people talking about this"}/>
              <BasicListItem title={"Samsung"} subtitle={"1M people talking about this"}/>
              <BasicListItem title={"Cristiano Ronaldo"} subtitle={"510k people talking about this"}/>
              <BasicListItem title={"Xiaomi"} subtitle={"120k people talking about this"}/>
           </ScrollView>
           <BottomBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  scroll:{
    margin: 15,
  },
});

AppRegistry.registerComponent('class1', () => class1);
