import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomBarItem from './BottomBarItem.js'

export default class BottomBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomBarItem style={styles.item} title="Item 1" numOfTab={"item1"}/>
        <BottomBarItem style={styles.item} title="Item 1" numOfTab={"item1"}/>
        <BottomBarItem style={styles.item} title="Item 1" numOfTab={"item1"}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: "white",
    borderTopWidth:1,
    borderColor: "gray",
  },
  item: {
    flex:1,
  }
});
